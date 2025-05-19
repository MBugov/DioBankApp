// Herança - é o compartilhamento de caracteristicas entre classes, com o objetivo de evitar repetição e reaproveitamento.

// classe mãe
// class Account {
//     name: string
//     accountNumber: number

//     constructor(name: string, accountNumber: number) {
//         this.name = name
//         this.accountNumber = accountNumber
//     }

//     deposit = () => {
//         console.log('Voce depositou')
//     }

//     whitdraw = () => {
//         console.log('Voce sacou')
//     }
// }

// // classe filha (classe derivada)
// class Admin extends Account {
//     balance: number

//     constructor(name: string, accountNumber: number) {
//         super(name, accountNumber)
//         this.balance = 20
//     }

//     getBalance = () => {
//         console.log(this.balance)
//     }
// }

// const newAccount: Account = new Account('Juareiz', 220588)
// console.log(newAccount)

// const adminAccount : Admin = new Admin('Xinaider', 11058)
// console.log(adminAccount)