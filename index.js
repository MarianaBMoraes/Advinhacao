let numero = "";
let i = 1;
var aleatorio = Math.floor(Math.random() * 101) + 100;

console.log("Jogo da adivinhação!");
console.log("Digite um número de 100 a 200 (Você tem 3 tentativas):");

process.stdin.on("data", function (data) {
  if (data.toString().trim().toLowerCase() == "não") {
    console.log("Até mais!");
    process.exit();
  } else if (data.toString().trim().toLowerCase() == "sim") {
    numero = "";
    i = 1;
    aleatorio = Math.floor(Math.random() * 101) + 100;
    console.log("Digite o número:");
  } else {
    numero = Number(data.toString().trim());
    if (i == 3 && numero != aleatorio) {
      console.log("Você atingiu o número máximo de tentativas!");
      console.log("O número correto é: " + aleatorio);
      console.log("Deseja jogar novamente? (sim ou não)");
    } else {
      if (numero == aleatorio) {
        console.log("Parabéns, você acertou! :)");
        console.log("Deseja jogar novamente? (sim ou não)");
      } else if (Math.abs(numero - aleatorio) < 5 * 0.3) {
        console.log("Quente! Você está próximo.");
        console.log("Você ainda tem " + (3 - i) + " tentativas.");
        i++;
      } else {
        console.log("Frio! Você ainda tem " + (3 - i) + " tentativas.");
        i++;
      }
    }
  }
});
