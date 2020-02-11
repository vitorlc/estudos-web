class Lancamento {
    constructor(nome ='Generico',  valor =0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l=>{
            valorConsolidado+=l.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 2000)
const contaDeInternet = new Lancamento('internet', -190)


const contas = new CicloFinanceiro(12, 2019)
contas.addLancamentos(salario, contaDeInternet)

console.log(contas.sumario())