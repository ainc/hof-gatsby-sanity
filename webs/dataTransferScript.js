

const fs = require('fs');
const path = require('path');
const sanityClient = require('@sanity/client');
const crypto = require('crypto');

// Initialize the Sanity client
const client = sanityClient({
  projectId: 'b1gnc6rj',  // Replace with your Sanity project ID
  dataset: 'production',      // Replace with your Sanity dataset name
  token: 'skibTC9jtILPwMyaSNzDZMlhMpI2SseBCke4WCBnsfyNaGGltpDxFrvpmOIrsnJIFpRWLBrooCTjyyJlHzZJIf7Owd998a1YlKVbRgCYBAShHnXVuulSf555rb44undcdZogY3mzc9WuvekGDRAUwD2l6pSH3jwHRwF8U9VPM2hazuDT82p5',    // Replace with your Sanity token
  useCdn: false                // `false` if you want to ensure fresh data
});

// Read the JSON file containing your data
const jsonDataFilePath = './inductees.json';
const localImagesPath = './src';  // Path to your local images folder

fs.readFile(jsonDataFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    return;
  }

  // Process each entry in the JSON data
  for (const entry of jsonData) {
    try {
      // Upload the main image if it exists
      let mainImageId = null;
      if (entry.image_link) {
        mainImageId = await uploadLocalImage(path.join(localImagesPath, entry.image_link), entry.display_name, 'main');
      }

      // Upload the profile video image if it exists
      let profileVideoImageId = null;
      if (entry.profileVideo && entry.profileVideo.imagePath) {
        profileVideoImageId = await uploadLocalImage(path.join(localImagesPath, entry.profileVideo.imagePath), entry.display_name, 'profileVideo');
      }

      // Upload the induction video image if it exists
      let inductionVideoImageId = null;
      if (entry.inductionVideo && entry.inductionVideo.imagePath) {
        inductionVideoImageId = await uploadLocalImage(path.join(localImagesPath, entry.inductionVideo.imagePath), entry.display_name, 'inductionVideo');
      }

      // Prepare the document to be sent to Sanity
      const sanityDoc = {
        _type: 'inductee',
        inductee: {
          _type: 'inducteeTemplate',
          name: entry.display_name,
          company: entry.company,
          tagline: entry.tagline,
          year: entry.year_class,
          profilePhoto: mainImageId ? { _type: 'image', asset: { _type: 'reference', _ref: mainImageId } } : null,
        },
        slug: {
          _type: 'slug',
          current: entry.abbreviated_name
        },
        bio: formatBio(entry.bio),  // Converts bio text to Sanity block content
        profileVideo: entry.profileVideo.videoLink,
        profileVideoImage: profileVideoImageId ? { _type: 'image', asset: { _type: 'reference', _ref: profileVideoImageId } } : null,
        inductionCeremonyVideo: entry.inductionVideo.videoLink,
        InductionVideoImage: inductionVideoImageId ? { _type: 'image', asset: { _type: 'reference', _ref: inductionVideoImageId } } : null
      };

      // Check if the document already exists
      const existingDoc = await client.fetch('*[_type == "inductee" && inductee.name == $name][0]', {
        name: entry.display_name
      });

      // Create or update the document in Sanity
      if (existingDoc) {
        await client.patch(existingDoc._id)
          .set(sanityDoc)
          .commit();
        console.log(`Updated document for ${entry.display_name}`);
      } else {
        await client.create(sanityDoc);
        console.log(`Created document for ${entry.display_name}`);
      }
    } catch (error) {
      console.error(`Error processing entry for ${entry.display_name}:`, error);
    }
  }
});

// Function to upload local images to Sanity
async function uploadLocalImage(localImagePath, personName, imageType) {
  const imageName = path.basename(localImagePath);

  try {
    // Ensure the file exists
    if (!fs.existsSync(localImagePath)) {
      throw new Error(`Image file ${localImagePath} does not exist`);
    }

    // Read the image file into a buffer
    const imageBuffer = fs.readFileSync(localImagePath);
    const imageDoc = await client.assets.upload('image', imageBuffer, { filename: `${personName}_${imageType}_${imageName}` });
    console.log(`Uploaded local image ${localImagePath} for ${personName} as ${imageType}`);
    return imageDoc._id;
  } catch (error) {
    console.error(`Error uploading local image ${localImagePath} for ${personName}:`, error);
    return null;
  }
}

// Function to convert bio text to Sanity block content
function formatBio(bioText) {
  if (!bioText) return [];
  return [
    {
      _type: 'block',
      _key: generateKey(),
      children: [
        {
          _type: 'span',
          _key: generateKey(),
          text: bioText,
        }
      ]
    }
  ];
}

// Function to generate a unique key
function generateKey() {
  return crypto.randomBytes(16).toString('hex');
}