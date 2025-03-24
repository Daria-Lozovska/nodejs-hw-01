import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = () => {
    try {
        if (!fs.existsSync(PATH_DB)) {
            console.log("File is nor find. Contacts: 0");
            return 0;
        }

        const data = fs.readFileSync(PATH_DB, 'utf-8');
        const contacts = data ? JSON.parse(data) : [];

        console.log(`Contacts: ${contacts.length}`);
        return contacts.length;
    } catch (err) {
        console.log("Error during read db.json", err);
        return 0;
    }
};

countContacts();