/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function BuscaNomes() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Checar nomes'));

    if (!operacao || operacao >= 2) {
        alert('Erro - operação inválida!');
        BuscaNomes();
    } else {

        let nomes = []

        function calcular() {
            for (let i = 1; i <= 10; i++) {
                let add = String(prompt(`Insira o ${i}° nome na lista:`));
                var adicionar = nomes.push(`${add}`);
            }

            let busca = String(prompt(`Insira o nome que deseja buscar:`));
            nomes.includes(`${busca}`);

            if (nomes.includes(`${busca}`)) {
                alert(`Achei o nome ${busca} na lista`);
            } else {
                alert(`Não achei o nome ${busca} na lista`);
            }
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                BuscaNomes();
            } else id(opcao == 2); {
                alert('Até mais!')
            }
        }

        if (operacao == 1) {
            calcular();
        }

    }
}


BuscaNomes();