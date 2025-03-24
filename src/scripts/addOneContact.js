import fs from 'node:fs';
import createFakeContact from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const addOneContact = () => {
    try {
        let contacts = [];
        if (fs.existsSync(PATH_DB)) {
            const data = fs.readFileSync(PATH_DB, 'utf-8');
            contacts = data ? JSON.parse(data) : [];
        }
        const newContact = createFakeContact();
        contacts.push(newContact);

        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log(`Success. All of contacts: ${contacts.length}`);
    } catch (err) {
        console.log("Error during write in db.json", err);
    }
};

addOneContact();