/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function ImprimirNumeros() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Imprimir números entre 1 e o número digitado'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        ImprimirNumeros();
    } else {
        let n1 = Number(prompt('Insira o número desejado:'));

        function calcular() {
            for (let i = 1; i <= n1; i++) {
                alert(`${i}`)
            }
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                ImprimirNumeros();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


ImprimirNumeros();