const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

const listContacts = async function () {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const addContact = async function (cnt) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    let newContent = `${data} ${cnt}`;
    await fs.writeFile(contactsPath, newContent, 'utf8');
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  listContacts,
  addContact,
};
