import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

(async () => {
    try {
        const readContacts = await fs.readFile(PATH_DB);
        console.log("Success: ", readContacts);
    } catch (err) {
        console.log("error: ", err);
    }
});