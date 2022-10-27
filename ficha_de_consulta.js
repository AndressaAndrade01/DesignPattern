class fichaDeConsulta{
    constructor(nome,idade,peso,altura,plano_saude){
        this.nome=nome
        this.idade=idade
        this.peso=peso
        this.altura=altura
        this.plano_saude=plano_saude
    }
    getDados(){

       return this.nome, this.idade, this.peso, this.altura, this.plano_saude
       
    }
}

const ficha=new fichaDeConsulta('Margareth',45,67,1.67,'Serpram')
console.log(ficha.getDados())