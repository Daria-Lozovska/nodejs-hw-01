import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

const removeLastContact = () => {
    try {
        if (!fs.existsSync(PATH_DB)) {
            console.log("File is nor find. Nothing to remove.");
            return;
        }
        const data = fs.readFileSync(PATH_DB, 'utf-8');
        let contacts = data ? JSON.parse(data) : [];

        if (contacts.length === 0) {
            console.log("Here is not contacts. Nothing to remove.");
            return;
        }

        contacts.pop();

        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log("Last contact is remove.");
    } catch (err) {
        console.log("Error during remove last contact", err);
    }
};

removeLastContact();