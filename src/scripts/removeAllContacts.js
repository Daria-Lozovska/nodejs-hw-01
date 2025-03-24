import fs from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = () => {
    try {
        if (!fs.existsSync(PATH_DB)) {
            console.log("File is not found. Nothing to remove.");
            return;
        }
        fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
        console.log("Success");
    } catch (err) {
        console.log("Error during clean db.json", err);
    }
};

removeAllContacts();