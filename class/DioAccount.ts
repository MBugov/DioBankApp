// classe abstrata - não é possivel instanciar um objeto diretamente dessa classe, ela serve para definir outras classes

export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setBalance = (value: number): number => {
        this.balance = value
        return this.balance
    }

    getBalance = (): number => {
        return this.balance
    }

    deposit = (value: number): void => {
        if (this.checkStatus()) {
            console.log(`Voce depositou R$ ${value}`)
            this.balance = this.balance + value
        }
    }

    whitdraw = (value: number): void => {
        if (this.checkStatus()) {
            if (this.balance < value) {
                throw new Error('Saldo insuficiente!')
            }
            console.log(`Voce sacou R$ ${value}`)
            this.balance = this.balance - value
        }
    }

    checkStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error('Conta inválida.')
    }
}