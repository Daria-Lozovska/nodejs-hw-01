import fs from 'node:fs/promises';

(async () => {
    try {
        const writeContacts = await fs.writeFile('../db/db.json');
    console.log("success: ", writeContacts);
    } catch (err) {
        console.log("Error: ", err);
    }
})