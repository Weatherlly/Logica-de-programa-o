/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function Validar() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Checar qual valor é maior'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        Validar();
    } else {
        let n1 = Number(prompt('Insira o primeiro número para teste:'));
        let n2 = Number(prompt('Insira o segundo número para teste:'));

        function calcular() {
            if (n1 > n2) {
                alert(`O número ${n1} é maior que o número ${n2}`)
            } else {
                alert(`O número ${n2} é maior que o número ${n1}`)
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