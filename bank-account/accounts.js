import { validateData } from "./validation.js";
import { getId } from "./utils.js";

export function createCustomer(fullName, accountType, balance) {
    if (validateData(fullName, accountType, balance)) {
        const newId = getId();
        return {
            id: newId,
            fullName,
            accountType,
            balance,
            isActive: true,
            deposit: function (amount) {
                if (!this.isActive) {
                    console.log("Deposit failed: User is not active");
                    return false;
                } else if (amount < 0) {
                    console.log("Deposit failed: Amount less then 0.");
                    return false;
                } else {
                    this.balance += amount;
                    return this.balance;
                }
            },
            withdraw: function (amount) {
                if (!this.isActive) {
                    console.log("Withdraw failed: User is not active");
                    return false;
                } else if (amount < 0) {
                    console.log("Withdraw failed: Amount less than 0.");
                    return false;
                } else if (this.balance - amount < 0) {
                    console.log("Withdraw failed: Balance to low.");
                    return false;
                } else {
                    this.balance -= amount;
                    return this.balance;
                }
            },
        };
    } else {
        return false;
    }
}

export const showAccounts = (accountList) =>
    accountList.map((account) => ({
        ID: account.id,
        Name: account.fullName,
        "Account Type": account.accountType,
        Balance: account.balance,
        Status: account.isActive,
    }));
