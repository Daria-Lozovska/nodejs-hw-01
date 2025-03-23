import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const removeLastContact = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            console.log("File is nor find. Nothing to remove.");
            return;
        }
        const data = fs.readFileSync(dbPath, 'utf-8');
        let contacts = data ? JSON.parse(data) : [];

        if (contacts.length === 0) {
            console.log("Here is not contacts. Nothing to remove.");
            return;
        }

        contacts.pop();

        fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log("Last contact is remove.");
    } catch (err) {
        console.log("Error during remove last contact", err);
    }
};

removeLastContact();