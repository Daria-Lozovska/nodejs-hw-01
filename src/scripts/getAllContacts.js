import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const getAllContacts = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            console.log("File db.json not find.");
            return [];
        }

        const data = fs.readFileSync(dbPath, 'utf-8');
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