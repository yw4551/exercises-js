export function validateData(fullName, accountType, balance) {
    if (!fullName) {
        console.log("Name cant be empty.");
        return false;
    }

    if (typeof balance !== "number" || balance < 0) {
        console.log("Balance must be a positive number.");
        return false;
    }

    const validAccounts = ["Regular", "Premium", "Student"];
    if (!validAccounts.includes(accountType)) {
        console.log("Invalid account type!");
        return false;
    }
    return true;
}
