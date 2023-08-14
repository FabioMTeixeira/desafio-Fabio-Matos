const cardapio = [
    {
        nome: 'café',
        extra: false,
        valor: 3.00
    },
    {
        nome: 'chantily',
        extra: true,
        valor: 1.50
    },
    {
        nome: 'suco',
        extra: false,
        valor: 6.20
    },
    {
        nome: 'sanduíche',
        extra: false,
        valor: 6.50
    },
    {
        nome: 'queijo',
        extra: true,
        valor: 2.00
    },
    {
        nome: 'salgado',
        extra: false,
        valor: 7.25
    },
    {
        nome: 'combo1',
        extra: false,
        valor: 9.50
    },
    {
        nome: 'combo2',
        extra: false,
        valor: 7.50
    }
];

function calcularValorCompra(formaDePagamento, itens) {
    let valorTotal = 0;

    if (itens.length === 0) {
        return console.log('Não há itens no carrinho de compra!');
    }
}

const itens = [];
const formaPagamento = "credito";

const valorTotalCompra = calcularValorCompra(formaPagamento, itens);
//console.log(`Valor total da compra: R$ ${valorTotalCompra}`);