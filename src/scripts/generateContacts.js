import fs from "node:fs";
import createFakeContacts from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";

const generateContacts = async (count) => {
    try {
        let contacts = [];

        try {
            const data = await fs.readFileSync(PATH_DB, 'utf-8');
            contacts = data ? JSON.parse(data) : [];
        } catch (err) {
            if (err.code !== "ENOENT") throw err;
        }

        const newContacts = Array.from({ length: count }, createFakeContacts);
        contacts.push(...newContacts);

        await fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log(`Success with add ${count} contacts. Now you have ${contacts.length}`);
    } catch (err) {
        console.log("Error: ", err);
    }
}; 

generateContacts(5);