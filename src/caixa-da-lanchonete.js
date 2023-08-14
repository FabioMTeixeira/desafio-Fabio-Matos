class Cardapio {
    constructor() {
        this.itens = [
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
    }

    getItem(nome) {
        return this.itens.find(item => item.nome === nome);
    }
}
class CaixaDaLanchonete {
    constructor() {
        this.cardapio = new Cardapio();
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        let valorTotal = 0;
        let chantily = false;
        let queijo = false;
        let cafe = false;
        let sanduiche = false;

        if (itens.length === 0) {
            return ('Não há itens no carrinho de compra!');
        }

        for (const item of itens) {
            const separador = item.split(',');
            const nomeProduto = separador[0];
            const quantidade = Number(separador[1]);
            const acharProduto = this.cardapio.getItem(nomeProduto);

            if (!acharProduto) {
                return 'Item inválido!';
            }

            if (quantidade === 0) {
                return 'Quantidade inválida!';
            }

            valorTotal += acharProduto.valor * quantidade;

            if (nomeProduto === "chantily") {
                chantily = true;
            }

            if (nomeProduto === "queijo") {
                queijo = true;
            }

            if (nomeProduto === "cafe") {
                cafe = true;
            }

            if (nomeProduto === "sanduiche") {
                sanduiche = true;
            }
        }

        if (queijo && !sanduiche) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (chantily && !cafe) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (formaDePagamento === "dinheiro") {
            valorTotal *= 0.95;
        } else if (formaDePagamento === "credito") {
            valorTotal *= 1.03;
        } else if (formaDePagamento !== "debito") {
            return "Forma de pagamento inválida!";
        }

        const valorTotalCompra = valorTotal.toFixed(2);

        return `R$ ${valorTotalCompra.replace('.', ',')}`;
    }
}

const valor = new CaixaDaLanchonete('dinheiro', ['café,1']);
console.log(valor);

export { CaixaDaLanchonete };
