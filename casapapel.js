const readlineSync = require('readline-sync');

// Banco de Dados Fake
let bancoDeDados = [
    { nome: "Professor", funcao: "Líder", arma: "Planejamento" },
    { nome: "Tóquio", funcao: "Assaltante", arma: "Metralhadora" },
    { nome: "Denver", funcao: "Assaltante", arma: "Martelo" },
    { nome: "Rio", funcao: "informática", arma: "Notebook" },
    { nome: "Nairóbi", funcao: "Negociadora", arma: "Inteligência emocional" }
];

// Função para exibir todos os personagens
function visualizarPersonagens() {
    console.log("=========== Personagens da Série ===========");
    bancoDeDados.forEach(personagem => {
        console.log(`Nome: ${personagem.nome} | Função: ${personagem.funcao} | Arma: ${personagem.arma}`);
    });
    menu();
}

// Função para adicionar um novo personagem
function adicionarPersonagem() {
    let nome = readlineSync.question("Digite o nome do novo personagem: ");
    let funcao = readlineSync.question("Digite a função do novo personagem: ");
    let arma = readlineSync.question("Digite a arma do novo personagem: ");

    bancoDeDados.push({ nome: nome, funcao: funcao, arma: arma });
    console.log(`O personagem ${nome} foi adicionado com sucesso!`);
    menu();
}

// Função para atualizar a arma de um personagem
function atualizarArma() {
    let nomePersonagem = readlineSync.question("Digite o nome do personagem que deseja atualizar a arma: ");
    let novaArma = readlineSync.question("Digite a nova arma: ");

    let personagem = bancoDeDados.find(p => p.nome === nomePersonagem);
    if (personagem) {
        personagem.arma = novaArma;
        console.log(`Arma do personagem ${nomePersonagem} atualizada para ${novaArma}!`);
    } else {
        console.log(`Personagem ${nomePersonagem} não encontrado!`);
    }
    menu();
}

// Função para verificar a quantidade de explosivos disponíveis
function verificarExplosivos() {
    let quantidadeExplosivos = 100; // Suponhamos que começamos com 100 explosivos
    console.log(`Quantidade de explosivos disponíveis: ${quantidadeExplosivos}`);
    menu();
}

// Função principal que exibe o menu e gerencia as opções
function menu() {
    console.log("\n=== Menu de Opções ===");
    console.log("1. Visualizar todos os personagens");
    console.log("2. Adicionar um novo personagem");
    console.log("3. Atualizar a arma de um personagem");
    console.log("4. Verificar a quantidade de explosivos disponíveis");
    console.log("5. Sair do programa");

    let opcao = readlineSync.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            visualizarPersonagens();
            break;
        case "2":
            adicionarPersonagem();
            break;
        case "3":
            atualizarArma();
            break;
        case "4":
            verificarExplosivos();
            break;
        case "5":
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("Opção inválida! Por favor, escolha novamente.");
            main();
    }
}

// Chamando a função principal para iniciar o programa
menu();
