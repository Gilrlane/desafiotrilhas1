function executarCodigo() {
    console.log("🌸 Código JavaScript Executado! 🌸");

    // 1. Criar variável nome e exibir o valor
    let nome = "Gilrlane";
    console.log(nome);

    // 2. Criar variáveis idade e altura e exibir os valores
    let idade = 25;
    let altura = 1.75;
    console.log(`Idade: ${idade}, Altura: ${altura}m`);

    // 3. Calcular preço com desconto
    let preco = 50;
    let desconto = 0.2;
    let precoFinal = preco - (preco * desconto);
    console.log(`Preço com desconto: R$ ${precoFinal.toFixed(2)}`);

    // 4. Verificar temperatura e exibir mensagem correspondente
    let temperatura = 30;
    console.log(temperatura > 25 ? "Está calor!" : "Está fresco!");

    // 5. Verificar se a pessoa é maior de idade
    let idadePessoa = 17;
    console.log(idadePessoa >= 18 ? "Você é maior de idade." : "Você é menor de idade.");

    // 6. Verificar nota do aluno e exibir resultado
    let nota = 6;
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }

    // 7. Comparar dois números e exibir mensagem correspondente
    let numero1 = 10;
    let numero2 = 15;
    console.log(numero1 === numero2 ? "Os números são iguais." : "Os números são diferentes.");

    // 8. Exibir mensagem com nome e idade utilizando concatenação
    let nomeUsuario = "Gilrlane";
    let idadeUsuario = 25;
    console.log(`Olá, meu nome é ${nomeUsuario} e eu tenho ${idadeUsuario} anos.`);

    // 9. Criar loop que imprime números de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    // 10. Criar loop que pede ao usuário para digitar um número até que ele digite 5
    let numeroDigitado;
    while (numeroDigitado != 5) {
        numeroDigitado = Number(prompt("Digite um número (digite 5 para sair):"));
    }
    console.log("Você digitou 5, encerrando o programa.");

    // 11. Criar loop que imprime a tabuada do número 7 de 1 a 10
    console.log("Tabuada do 7:");
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }

    // 12. Criar loop que exibe todos os números pares de 0 a 20
    console.log("Números pares de 0 a 20:");
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }

    // 13. Criar função que calcula a área de um círculo com base no raio
    function calcularAreaCirculo(raio) {
        return Math.PI * Math.pow(raio, 2);
    }
    let raio = 5;
    console.log(`A área do círculo com raio ${raio} é: ${calcularAreaCirculo(raio).toFixed(2)}`);

    // 14. Criar um programa que calcula a soma de dois números e imprime o resultado
    function somarNumeros(a, b) {
        return a + b;
    }
    let resultadoSoma = somarNumeros(10, 20);
    console.log(`A soma dos números é: ${resultadoSoma}`);

    // 15. Refatorar o código para boas práticas
    function somar(x, y) {
        return x + y;
    }
    let numeroA = 10;
    let numeroB = 20;
    let resultado = somar(numeroA, numeroB);
    console.log(`O resultado da soma é: ${resultado}`);
}
