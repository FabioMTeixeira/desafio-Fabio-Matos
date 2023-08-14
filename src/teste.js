const cardapio = [
    {
        nome: 'cafe',
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
        nome: 'sanduiche',
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
    let somenteExtra = true;

    if (itens.length === 0) {
        return console.log('Não há itens no carrinho de compra!');
    }

    for (const item of itens) {
        const separador = item.split(',');
        const nomeProduto = separador[0];
        const quantidade = Number(separador[1]);
        const acharProduto = cardapio.find((produto) => produto.nome === nomeProduto);

        if (!acharProduto) {
            return console.log('Item inválido!');
        }

        valorTotal += acharProduto.valor * quantidade;

        if (!acharProduto.extra) {
            somenteExtra = false;
        }
    }

    if (somenteExtra) {
        return console.log('Item extra não pode ser pedido sem o principal');
    }
}

const itens = ['chantily,1', 'cafe,1'];
const formaPagamento = "credito";

const valorTotalCompra = calcularValorCompra(formaPagamento, itens);
//console.log(`Valor total da compra: R$ ${valorTotalCompra}`);