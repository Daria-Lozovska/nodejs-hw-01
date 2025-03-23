import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import createFakeContact from '../utils/createFakeContact.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const addOneContact = () => {
    try {
        let contacts = [];
        if (fs.existsSync(dbPath)) {
            const data = fs.readFileSync(dbPath, 'utf-8');
            contacts = data ? JSON.parse(data) : [];
        }
        const newContact = createFakeContact();
        contacts.push(newContact);

        fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log(`Success. All of contacts: ${contacts.length}`);
    } catch (err) {
        console.log("Error during write in db.json", err);
    }
}

addOneContact();