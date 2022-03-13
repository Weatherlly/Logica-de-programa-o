/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
 * cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
 * o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 * (considere que o mês possua 4 semanas exatas).   
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Calcular salário'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o número de horas trabalhadas:'));
        let n2 = Number(prompt('Insira o salário por hora:'));
        let resultado

        function calcular() {
            if (n1 > 40) {
                resultado = ((n1 - 40) * n2 * 1.5) + (40 * n2)
                alert(`O salário é ${resultado}`)
            } else {
                resultado = n1 * n2
                alert(`O salário é ${resultado}`)
            }
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