/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Calcular custo final'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o custo de fábrica:'));
        let resultado;

        function calcular() {
            resultado = n1 + n1 * 28 / 100 + n1 * 45 / 100;
            alert(`O custo final do carro é: ${resultado}`)
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                calculadora();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


calculadora();