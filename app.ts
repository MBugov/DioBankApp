import { CompanyAccount } from './class/CompanyAccount';
import { ContaPlusAccount } from './class/ContaPlusAccount';
import { PeopleAccount } from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Pessoa A', 220588)
console.log(peopleAccount.getDocId())
console.log(peopleAccount.getName())
console.log(peopleAccount.getAccountNumber())
peopleAccount.deposit(254)
console.log(`Saldo atual: R$ ${peopleAccount.getBalance()}`)
peopleAccount.deposit(10)
console.log(`Saldo atual: R$ ${peopleAccount.getBalance()}`)

peopleAccount.whitdraw(10)
console.log(`Saldo atual: R$ ${peopleAccount.getBalance()}`)
peopleAccount.whitdraw(254)
console.log(`Saldo atual: R$ ${peopleAccount.getBalance()}`)

const companyAccount: CompanyAccount = new CompanyAccount('Empresa B', 55899)
console.log(companyAccount.getName())
console.log(companyAccount.getAccountNumber())
companyAccount.deposit(20000)
console.log(`Saldo atual: R$ ${companyAccount.getBalance()}`)
companyAccount.getLoan(100)
console.log(`Novo saldo ajustado para ${companyAccount.getBalance()}`)

const peoplePlusAccount = new ContaPlusAccount('Pessoa B', 254488)
console.log(peoplePlusAccount.getName())
console.log(peoplePlusAccount.getAccountNumber())
peoplePlusAccount.depositoPlus(300)
console.log(`Saldo atual: R$ ${peoplePlusAccount.getBalance()}`)