// 🏦 BankAccount Class with Deposit and Withdrawal
// Write a JavaScript program that creates
// a class called "BankAccount" with properties for account number
// and balance. Include methods to deposit and 
// withdraw money from the account. Create some
// instances of the "BankAccount" class, deposit some money, 
// and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, balance) {
        this.account = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Error: Insufficient funds";
        } else {
            this.balance -= amount;
            return this.balance;
        }
    }
}

let one = new BankAccount(200400599, 5000);
console.log(`Account Number = ${one.account}, Balance = ${one.balance}`);
console.log(`After deposit: ${one.deposit(3000)}`);
console.log(`After withdrawal: ${one.withdraw(300)}`);

console.log("\n--- Inheritance Example ---");

class PremiumAccount extends BankAccount {
    constructor(accountNumber, balance) {
        super(accountNumber, balance);
    }
}

let two = new PremiumAccount(200400599222, 10000);
console.log(`Account Number = ${two.account}, Balance = ${two.balance}`);
console.log(`After deposit: ${two.deposit(3000)}`);
console.log(`After withdrawal: ${two.withdraw(300)}`);