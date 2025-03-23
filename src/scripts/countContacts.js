import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const countContacts = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            console.log("File is nor find. Contacts: 0");
            return 0;
        }

        const data = fs.readFileSync(dbPath, 'utf-8');
        const contacts = data ? JSON.parse(data) : [];

        console.log(`Contacts: ${contacts.length}`);
        return contacts.length;
    } catch (err) {
        console.log("Error during read db.json", err);
        return 0;
    }
};

countContacts();