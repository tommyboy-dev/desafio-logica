let nickname = "Tommyboy";
let xpAmount = "10250"; // Número para comparação correta
let level = ""; // Variável para armazenar o resultado do switch case

switch (true) {

    case (xpAmount < 1000):
        level = "Ferro";
        break;

    case (xpAmount >= 1001 && xpAmount <= 2000):
        level = "Bronze";
        break;

    case (xpAmount >= 2001 && xpAmount <= 3000):
        level = "Prata";
        break;

    case (xpAmount >= 3001 && xpAmount <= 4000):
        level = "Ouro";
        break;

    case (xpAmount >= 4001 && xpAmount <= 6000):
        level = "Platina";
        break;

    case (xpAmount >= 6001 && xpAmount <= 8000):
        level = "Diamante";
        break;

    case (xpAmount >= 8001 && xpAmount <= 9000):
        level = "Ascendente";
        break;

    case (xpAmount >= 9001 && xpAmount <= 10000):
        level = "Imortal";
        break;

    case (xpAmount >= 10001):
        level = "Radiante";
        break;

    default:
        level = "Classificação inexistente";

}

// Exibição da mensagem completa

console.log("O herói " + nickname + " tem nível " + level);
