/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function Validar() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Checar se o número é positivo ou negativo'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        Validar();
    } else {
        let n1 = Number(prompt('Insira o número para teste:'));

        function calcular() {
            if (n1 >= 0) {
                alert(`O número ${n1} é positivo`)
            } else {
                alert(`O número ${n1} é negativo`)
            }
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                Validar();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


Validar();