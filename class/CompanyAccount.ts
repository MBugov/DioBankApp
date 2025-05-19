import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    getLoan = (value: number) =>{
        console.log(`Emprestimo solicitado no valor de R$ ${value}`)
        const newBalance = this.getBalance() + value
        this.setBalance(newBalance)
        
    }
}