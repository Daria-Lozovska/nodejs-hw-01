import fs from 'node:fs/promises';

(async () => {
    try {
        const readContacts = await fs.readFile("../db/db.json");
        console.log("Success: ", readContacts);
    } catch (err) {
        console.log("error: ", err);
    }
})