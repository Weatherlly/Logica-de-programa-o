/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
 */
function Tabuada() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Imprimir tabuada'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        Tabuada();
    } else {

        function calcular() {
            for (let i = 1; i <= 10; i++) {
                alert(`A tabuada de ${i} é:\n ${i} * 1 = ${i * 1}\n ${i} * 2 = ${i * 2}\n ${i} * 3 = ${i * 3}\n ${i} * 4 = ${i * 4}\n ${i} * 5 = ${i * 5}\n ${i} * 6 = ${i * 6}\n ${i} * 7 = ${i * 7}\n ${i} * 8 = ${i * 8}\n ${i} * 9 = ${i * 9}\n ${i} * 10 = ${i * 10}`)
            }
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                Tabuada();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


Tabuada();