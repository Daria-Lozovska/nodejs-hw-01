import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = () => {
    try {
        if (!fs.existsSync(PATH_DB)) {
            console.log("File db.json not find.");
            return [];
        }

        const data = fs.readFileSync(PATH_DB, 'utf-8');
        const contacts = data ? JSON.parse(data) : [];

        console.log(`All of contacts: ${contacts.length}`);
        console.log(contacts);

        return contacts;
    } catch (err) {
        console.log("Error during write db.json", err);
        return [];
    }
    
};

getAllContacts();