// Função que mostra a pergunta ao usuário e exibe o resultado com base na resposta
function fazerPergunta(pergunta, callback) {
    let resposta = prompt(pergunta);
    callback(resposta);
}

// Pergunta 1 - Nome
fazerPergunta("Qual é o seu nome?", function(resposta) {
    document.getElementById("nome").textContent = `Nome: ${resposta}`;
    
    // Pergunta 2 - Idade e Altura
    fazerPergunta("Qual é a sua idade?", function(respostaIdade) {
        let idade = parseInt(respostaIdade);
        document.getElementById("idade").textContent = `Idade: ${idade}`;
        
        fazerPergunta("Qual é a sua altura?", function(respostaAltura) {
            let altura = parseFloat(respostaAltura);
            document.getElementById("altura").textContent = `Altura: ${altura}`;

            // Pergunta 3 - Verificando a temperatura
            fazerPergunta("Qual a temperatura agora?", function(respostaTemperatura) {
                let temperatura = parseInt(respostaTemperatura);
                let clima = temperatura > 25 ? "Está calor!" : "Está fresco!";
                document.getElementById("temperatura").textContent = `Clima: ${clima}`;

                // Pergunta 4 - Verificando maioridade
                let maioridade = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
                document.getElementById("maioridade").textContent = `Maioridade: ${maioridade}`;

                // Pergunta 5 - Nota do aluno
                fazerPergunta("Qual é a sua nota?", function(respostaNota) {
                    let nota = parseInt(respostaNota);
                    let resultadoNota = (nota >= 7) ? "Aprovado" : (nota >= 5) ? "Recuperação" : "Reprovado";
                    document.getElementById("nota").textContent = `Nota: ${resultadoNota}`;
                    
                    // Pergunta 6 - Números para comparação
                    fazerPergunta("Escolha um número para comparar:", function(respostaNumero) {
                        let numero1 = parseInt(respostaNumero);
                        let numero2 = 20;
                        let comparacao = (numero1 === numero2) ? "Os números são iguais" : "Os números são diferentes";
                        document.getElementById("comparacao").textContent = `Comparação: ${comparacao}`;

                        // Pergunta 7 - Digite um número
                        fazerPergunta("Digite um número :", function(respostaNumero2) {
                            let numero = parseInt(respostaNumero2);
                            if (numero === 5) {
                                document.getElementById("numero").textContent = "Você digitou 5!";
                            } else {
                                document.getElementById("numero").textContent = `Você digitou ${numero}, mas o número correto era 5.`;
                            }

                            // Pergunta 8 - Tabuada do 7
                            let tabuada = "";
                            for (let i = 1; i <= 10; i++) {
                                tabuada += `7 x ${i} = ${7 * i} <br>`;
                            }
                            document.getElementById("tabuada").innerHTML = `Tabuada do 7:<br>${tabuada}`;

                            // Pergunta 9 - Números pares
                            let pares = "";
                            for (let i = 0; i <= 20; i += 2) {
                                pares += `${i} `;
                            }
                            document.getElementById("pares").textContent = `Números pares de 0 a 20: ${pares}`;

                            // Pergunta 10 - Cálculo da área do círculo
                            fazerPergunta("Qual o raio do círculo?", function(respostaRaio) {
                                let raio = parseFloat(respostaRaio);
                                function calcularAreaCirculo(raio) {
                                    return Math.PI * Math.pow(raio, 2);
                                }
                                document.getElementById("areaCirculo").textContent = `Área do círculo (raio ${raio}): ${calcularAreaCirculo(raio)}`;

                                // Pergunta 11 - Soma de dois números
                                fazerPergunta("Qual é o primeiro número para somar?", function(respostaNumero1) {
                                    let numero1 = parseInt(respostaNumero1);
                                    fazerPergunta("Qual é o segundo número para somar?", function(respostaNumero2) {
                                        let numero2 = parseInt(respostaNumero2);
                                        let soma = numero1 + numero2;
                                        document.getElementById("soma").textContent = `A soma de ${numero1} e ${numero2} é: ${soma}`;
                                        
                                        // Pergunta 12 - Refatoração
                                        let resultado = soma;
                                        document.getElementById("refatoracao").textContent = `Resultado da soma refatorada: ${resultado}`;
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
