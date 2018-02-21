const produto ={
    nome: 'Caneta',
    marca: 'Bic',
    cor: 'Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto}
}

const novoProduto = clone(produto)
novoProduto.cor = 'Azul'

console.log(produto, novoProduto)