import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const removeAllContacts = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            console.log("File is not found. Nothing to remove.");
            return;
        }
        fs.writeFileSync(dbPath, JSON.stringify([], null, 2), 'utf-8');
        console.log("Success");
    } catch (err) {
        console.log("Error during clean db.json", err);
    }
};

removeAllContacts();