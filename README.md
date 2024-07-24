# Decodificador
Este projeto foi desenvolvido para ajudar uma amiga com uma atividade escolar, utilizando uma abordagem semelhante à cifra de César para criptografia e descriptografia de textos.

<h3>Descrição:</h3> 

Este decodificador permite criptografar e descriptografar textos utilizando um alfabeto deslocado. A cifra de César é uma técnica de criptografia simples onde cada letra do texto é substituída por outra letra que está um número fixo de posições à frente no alfabeto.

<h3>Funcionalidades:</h3>

- Criptografia de Texto: Converte o texto original em uma versão criptografada, utilizando um alfabeto deslocado.
- Descriptografia de Texto: Converte o texto criptografado de volta para o texto original.
- Deslocamento Aleatório: O alfabeto deslocado é gerado com um valor de deslocamento aleatório entre 1 e 5, proporcionando variação na criptografia.

<h3>Comentários no Código:</h3>
O código contém comentários detalhados para facilitar a compreensão de cada parte do processo de criptografia e descriptografia. Isso torna o código mais acessível e fácil de entender para futuros desenvolvedores ou para aqueles que desejam aprender mais sobre criptografia simples.

<h3>Estrutura do Código</h3>

- Função generateShiftedAlphabet(shift): Gera o alfabeto deslocado com base em um valor de deslocamento fornecido.
- Função encrypt(text): Criptografa o texto fornecido utilizando o alfabeto deslocado.
- Função decrypt(text): Descriptografa o texto criptografado de volta para o texto original.
- Função updateCipher(): Atualiza o alfabeto deslocado com um novo valor de deslocamento aleatório e atualiza os textos criptografados e descriptografados na interface do usuário.
- Eventos dos Botões: Configurações de eventos para os botões de criptografia e descriptografia, permitindo a interação do usuário com o decodificador.


<h3>Possíveis Melhorias Futuras</h3>

- Aprimoramento da Interface do Usuário: Melhorar a interface gráfica para tornar o uso do decodificador mais intuitivo e visualmente atraente.
- Adição de Novas Funcionalidades: Implementar novas técnicas de criptografia ou permitir que o usuário escolha o valor de deslocamento.
- Otimização do Código: Refatorar e otimizar o código para melhorar a eficiência e a legibilidade.

<h3>Como Usar</h3>

1. Clonar o Repositório: Clone este repositório para sua máquina local.
2. Abrir o Arquivo HTML: Abra o arquivo index.html em seu navegador preferido.
3. Inserir Texto: Insira o texto que deseja criptografar ou descriptografar no campo de entrada.
4. Clicar nos Botões: Use os botões "Criptografar" e "Descriptografar" para processar o texto.
5. Ver Resultados: Veja o texto criptografado e descriptografado exibido na interface.
