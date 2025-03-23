import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import createFakeContacts from "../utils/createFakeContact.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

const generateContacts = async (count) => {
    try {
        let contacts = [];

        try {
            const data = await fs.readFileSync(dbPath, 'utf-8');
            contacts = data ? JSON.parse(data) : [];
        } catch (err) {
            if (err.code !== "ENOENT") throw err;
        }

        const newContacts = Array.from({ length: count }, createFakeContacts);
        contacts.push(...newContacts);

        await fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log(`Success with add ${count} contacts. Now you have ${contacts.length}`);
    } catch (err) {
    console.log("Error: ", err);
}
} 

generateContacts(5);