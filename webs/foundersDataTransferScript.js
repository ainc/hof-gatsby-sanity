

const fs = require('fs');
const path = require('path');
const sanityClient = require('@sanity/client');
const crypto = require('crypto');

// Initialize the Sanity client
const client = sanityClient({
  projectId: 'b1gnc6rj',  // Replace with your Sanity project ID
  dataset: 'development',      // Replace with your Sanity dataset name
  token: 'skibTC9jtILPwMyaSNzDZMlhMpI2SseBCke4WCBnsfyNaGGltpDxFrvpmOIrsnJIFpRWLBrooCTjyyJlHzZJIf7Owd998a1YlKVbRgCYBAShHnXVuulSf555rb44undcdZogY3mzc9WuvekGDRAUwD2l6pSH3jwHRwF8U9VPM2hazuDT82p5',    // Replace with your Sanity token
  useCdn: false                // `false` if you want to ensure fresh data
});

// Read the JSON file containing your data
const jsonDataFilePath = './founders.json';
const localImagesPath = './src/images';  // Path to your local images folder


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
      let mainPic = null;
      let imageName = null;
      if (entry.preview) {
        imageName = entry.preview;
        mainPic = await uploadLocalImage(path.join(localImagesPath, imageName), entry.title, 'main');
      }

      // Prepare the document to be sent to Sanity
      const sanityDoc = {
        _type: 'foundersSeries',
        title: entry.title,
        videoEmbedLink: entry.video_link,
        preview: mainPic ? { _type: 'image', asset: { _type: 'reference', _ref: mainPic } } : null,
        year: entry.year
      };

      // Check if the document already exists
      const existingDoc = await client.fetch('*[_type == "founderSeries" && title == $title][0]', {
        title: entry.title
    
      });

      // Create or update the document in Sanity
      if (existingDoc) {
        await client.patch(existingDoc._id)
          .set(sanityDoc)
          .commit();
        console.log(`Updated document for ${entry.title}`);
      } else {
        await client.create(sanityDoc);
        console.log(`Created document for ${entry.title}`);
      }
    } catch (error) {
      console.error(`Error processing entry for ${entry.title}:`, error);
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