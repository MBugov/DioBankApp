import { DioAccount } from "./DioAccount";

export class ContaPlusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositoPlus = (value: number) => {
        const newDeposit = value + 10
        console.log(`Deposito de R$ ${newDeposit}`)
        this.setBalance(this.getBalance() + newDeposit)
    }
}