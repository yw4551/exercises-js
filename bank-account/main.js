import input from "analiza-sync";
import {
    addCustomer,
    closeAccount,
    showCustomers,
    deposit,
    withdraw,
    findCustomerById,
    findCustomerByName,
    showStatistics,
} from "./manager.js";

function mainMenu() {
    console.log("===== Main Menue =====");
    console.log("1. Create Customer");
    console.log("2. Show Customers");
    console.log("3. Depasit");
    console.log("4. Withdraw");
    console.log("5. Search By ID");
    console.log("6. Search by name");
    console.log("7. Close Account");
    console.log("8. Show Statistics");
    console.log("9. exit");
    const option = input("Enter your choice: ");
    return Number(option);
}

function handelUserChoise(option) {
    if (option === 1) {
        const fullName = input("Enter your name: ");
        const accountType = input("Enter your account type: ");
        const balance = Number(input("Enter your balance: "));
        addCustomer(fullName, accountType, balance);
    } else if (option === 2) {
        showCustomers();
    } else if (option === 3) {
        const id = Number(input("Enter your ID: "));
        const amount = Number(input("Enter the amount you want to deposit: "));
        deposit(id, amount);
    } else if (option === 4) {
        const id = Number(input("Enter your ID: "));
        const amount = Number(input("Enter the amount you want to witdraw: "));
        withdraw(id, amount);
    } else if (option === 5) {
        const id = Number(input("Enter your ID: "));
        console.log(findCustomerById(id));
    } else if (option === 6) {
        const name = input("Enter your name: ");
        console.log(findCustomerByName(id));
    } else if (option === 7) {
        const id = Number(input("Enter your ID: "));
        closeAccount(id);
    } else if (option === 8) {
        showStatistics();
    } else {
        console.log("Invalid choise: Try agein.");
    }
}

while (true) {
    const option = mainMenu();
    if (option === 9) {
        break;
    } else {
        handelUserChoise(option);
    }
}
