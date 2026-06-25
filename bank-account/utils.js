const createId = () => {
    let id = 0;
    return () => {
        id++;
        return id;
    };
};

export const getId = createId();

export const findById = (list, id) => list.find((account) => account.id === id);
export const findByName = (list, fullName) =>
    list.find(
        (account) =>
            account.fullName.trim().toLowerCase() ===
            fullName.trim().toLowerCase(),
    );

const getActives = (list) =>
    list.filter((account) => account.isActive === true);
const getMoneySum = (list) => list.reduce((acc, curr) => acc + curr.balance, 0);
const highestBalance = (list) =>
    list.reduce((acc, curr) => (curr.balance > acc ? curr.balance : acc), 0);
const average = (list) =>
    list.length === 0 ? 0 : getMoneySum(list) / list.length;

export function getStatistics(list) {
    console.log("===== Statistics =====");
    console.log(`Total Customers: ${list.length}`);
    console.log(`Active Accounts: ${getActives(list).length}`);
    console.log(`Total Money: ${getMoneySum(list)}`);
    console.log(`Average balance: ${average(list)}`);
    console.log(`Highest Balance: ${highestBalance(list)}`);
}
