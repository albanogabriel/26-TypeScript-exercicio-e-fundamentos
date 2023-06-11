class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }

}


// modificador privado

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }

    getSaldo () {
        return this.saldo;
    }

    setSaldo(valor: number) {
        this.saldo = valor
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
// vamos verificar a listagem de recursos da conta bancária do Pedro abaixo:
// contaDoPedro.

