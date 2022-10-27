const fichaDeConsulta=(nome,idade,peso,altura,plano_saude) => ({

    nome,
    idade,
    peso,
    altura,
    plano_saude,
    getDados: () => ({nome,idade,peso,altura,plano_saude})

})
const ficha=fichaDeConsulta('Joao',23,78,1.75,'Serpram')
console.log(ficha.getDados())

