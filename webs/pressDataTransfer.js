

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
const jsonDataFilePath = './press.json';



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

      // Prepare the document to be sent to Sanity
      const sanityDoc = {
        _type: 'press',
        title: entry.title,
        publisher: entry.publisher,
        date: entry.date,
        link: entry.link,
      };

      // Check if the document already exists
      const existingDoc = await client.fetch('*[_type == "press" && title == $title][0]', {
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
