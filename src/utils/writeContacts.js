import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

(async () => {
    try {
        const writeContacts = await fs.writeFile(PATH_DB);
        console.log("success: ", writeContacts);
    } catch (err) {
        console.log("Error: ", err);
    }
});