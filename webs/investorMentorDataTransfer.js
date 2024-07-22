    // Upload JSON data to Sanity
    async function uploadToSanity(data) {
        for (const entry of data) {
            const existingDoc = await client.fetch('*[_type == "investorMentor" && name == $name][0]', {
                name: entry.name
            });

            if (existingDoc) {
                // Update existing document
                await client
                    .patch(existingDoc._id)
                    .set(entry)
                    .commit()
                    .then(updatedDoc => {
                        console.log(`Updated document: ${updatedDoc._id}`);
                    })
                    .catch(err => {
                        console.error('Error updating document:', err);
                    });
            } else {
                // Create new document
                await client
                    .create({
                        _type: 'investorMentor',
                        ...entry
                    })
                    .then(newDoc => {
                        console.log(`Created new document: ${newDoc._id}`);
                    })
                    .catch(err => {
                        console.error('Error creating document:', err);
                    });
            }
        }
    }

    uploadToSanity(jsonData);
