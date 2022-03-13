/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Calcular salário reajustado'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o salário atual:'));
        let n2 = Number(prompt('Insira o valor percentual do reajuste'));
        let resultado;

        function calcular() {
            resultado = n1 + n1 * n2 / 100;
            alert(`o valor do salario reajustado é igual a: ${resultado}`)
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