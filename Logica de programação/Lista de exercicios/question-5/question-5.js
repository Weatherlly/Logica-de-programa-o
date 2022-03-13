/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function Validador() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Checar se o número é maior que 10'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        Validador();
    } else {
        let n1 = Number(prompt('Insira o número para Validar:'));

        function calcular() {
            if (n1 > 10) {
                alert(`O número ${n1} é maior que 10`)
            } else {
                alert(`O número ${n1} não é maior que 10`)
            }
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                Validador();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }


        if (operacao == 1) {
            calcular();
        }

    }
}


Validador();