import { createCustomer, showAccounts } from "./accounts.js";
import { findById, findByName, getStatistics } from "./utils.js";

export const accounts = [];

export function addCustomer(fullName, accountType, balance) {
    const account = createCustomer(fullName, accountType, balance);
    if (account) {
        accounts.push(account);
        console.log("Customer created successfully");
    }
}

export function showCustomers() {
    console.table(showAccounts(accounts));
}

export function deposit(CustomerId, amount) {
    const account = findById(accounts, CustomerId);
    if (account) {
        const transfer = account.deposit(amount);
        if (transfer) {
            console.log("Deposit completed successfully");
        }
    } else {
        console.log("Custimor ID not found");
    }
}

export function withdraw(CustomerId, amount) {
    const account = findById(accounts, CustomerId);
    if (account) {
        const transfer = account.withdraw(amount);
        if (transfer) {
            console.log("Withdraw completed successfully");
        }
    } else {
        console.log("Custimor ID not found");
    }
}

export function findCustomerById(id) {
    const account = findById(accounts, id);
    if (account) {
        return account;
    } else {
        return "Customer not found.";
    }
}

export function findCustomerByName(fullName) {
    const account = findByName(accounts, fullName);
    if (account) {
        return account;
    } else {
        console.log("Customer not found.");
    }
}

export function closeAccount(id) {
    const account = findById(accounts, id);
    if (account) {
        account.isActive = false;
        console.log("Account closed successfully");
    } else {
        console.log("Customer not found.");
    }
}

export function showStatistics() {
    getStatistics(accounts);
}
