/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
 * 
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Calcular média'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira a primeira nota:'));
        let n2 = Number(prompt('Insira a segunda nota:'));
        let n3 = Number(prompt('Insira a terceira nota:'));
        let resultado;

        function calcular() {
            resultado = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
            alert(`a média final é igual a: ${resultado}`)
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