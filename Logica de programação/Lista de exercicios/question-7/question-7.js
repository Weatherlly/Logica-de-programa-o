/**
 *  As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Calcular valor total'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o número de maças que foram compradas:'));
        let resultado;

        function calcular() {
            if (n1 >= 12) {
                resultado = n1 * 1.00
                alert(`Foram compradas ${n1} maçãs, com o custo unitario de R$ 1,00 totalizando R$ ${resultado}`)
            } else {
                resultado = n1 * 1.30
                alert(`Foram compradas ${n1} maçãs, com o custo unitario de R$ 1,30 totalizando R$ ${resultado}`)
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