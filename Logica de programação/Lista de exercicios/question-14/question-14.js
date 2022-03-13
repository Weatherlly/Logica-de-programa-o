/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function InverteVetor() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Inverter vetor'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        InverteVetor();
    } else {

        let Q = []

        function calcular() {
            for (let i = 1; i <= 20; i++) {
                let add = String(prompt(`Insira o ${i}° nome na lista:`));
                var adicionar = Q.push(`${add}`);
            }
            Q.reverse()

            alert(`${Q}`);

            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                InverteVetor();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


InverteVetor();