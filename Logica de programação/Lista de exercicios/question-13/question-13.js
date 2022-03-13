/**
 * Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos). 
 * Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function EncontraMaximo() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Checar maior número'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        EncontraMaximo();
    } else {

        let Q = []

        function calcular() {
            for (let i = 1; i <= 20; i++) {
                let add = String(prompt(`Insira o ${i}° nome na lista:`));
                if (add < 0) {
                    alert('Erro - o número deve ser positivo!');
                    EncontraMaximo();
                }
                var adicionar = Q.push(`${add}`);
            }
            var max = Math.max(...Q)
            alert(`${max}`);

            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                EncontraMaximo();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


EncontraMaximo();