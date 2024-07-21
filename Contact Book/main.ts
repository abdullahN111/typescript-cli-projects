#! /usr/bin/env node

import { log } from "console";

import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

class Contact {
    id: number; 
    name: string; 
    phone: string;
    constructor(id: number, name: string, phone: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
const contacts: Contact[] = []
let contactId = 0;

while (true) {
    console.log("\n1. Add contact");
    console.log("2. View contacts");
    console.log("3. Delete contact");
    console.log("4. Exit");

    const choice = prompt("Choose an option: ")

    if (choice === "1") {
        const name = prompt("Enter contact name: ")
        const phone = prompt("Enter contact phone: ")
        if (name && phone) {
            contacts.push(new Contact(contactId++, name, phone));
            console.log("Contact added.");
        } else {
        console.log("Invalid name or phone")
    }
}  else if (choice === "2") {
    console.log("\nContact List:");
    if (contacts.length === 0) {
        console.log("No contacts available.");
    } else {
        contacts.forEach(contact => {
            console.log(`${contact.id}. ${contact.name} - ${contact.phone}`)
        })
    }
} else if (choice === "3") {
    const id = parseInt(prompt("Enter contact id to delete: "), 10)
    const index = contacts.findIndex(contact => contact.id === id)
    if (index !== -1) {
        contacts.splice(index, 1);
            console.log("Contact deleted.");
        } else {
            console.log("Contact not found.");
        }
    } else if (choice === "4") {
        console.log("Exiting...")
        break;
    } else {
        console.log("Invalid option. Please try again.");
    }
}
