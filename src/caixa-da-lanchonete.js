import cardápio from './bancoDeDados/cardápio';

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (metodoDePagamento === 'dinheiro') {
            for (const item of itens) {
                const separador = item.split(',');
            }
        }
        return;
    }
}

const valor = new CaixaDaLanchonete('dinheiro', ['café,1']);
console.log(valor);

export { CaixaDaLanchonete };
