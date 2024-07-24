// Função para obter um número inteiro aleatório entre min (inclusive) e max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar o alfabeto deslocado
function generateShiftedAlphabet(shift) {
    // Define o alfabeto padrão
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Cria o alfabeto deslocado cortando o alfabeto original no ponto de deslocamento
    // e concatenando as duas partes (a parte deslocada e a parte inicial)
    return alphabet.slice(shift) + alphabet.slice(0, shift);
}

// Variáveis globais para armazenar o alfabeto original e o alfabeto deslocado
let originalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let shiftedAlphabet = generateShiftedAlphabet(getRandomInt(1, 5));

// Função para criptografar um texto
function encrypt(text) {
    return text.toUpperCase().split('').map(char => {
        // Encontra o índice do caractere no alfabeto original
        const index = originalAlphabet.indexOf(char);
        // Substitui pelo caractere correspondente no alfabeto deslocado
        // Se o caractere não estiver no alfabeto (ex: espaços, pontuações), retorna o próprio caractere
        return index !== -1 ? shiftedAlphabet[index] : char;
    }).join(''); // Junta todos os caracteres criptografados em uma única string
}

// Função para descriptografar um texto
function decrypt(text) {
    return text.toUpperCase().split('').map(char => {
        // Encontra o índice do caractere no alfabeto deslocado
        const index = shiftedAlphabet.indexOf(char);
        // Substitui pelo caractere correspondente no alfabeto original
        // Se o caractere não estiver no alfabeto (ex: espaços, pontuações), retorna o próprio caractere
        return index !== -1 ? originalAlphabet[index] : char;
    }).join(''); // Junta todos os caracteres descriptografados em uma única string
}

// Função para atualizar a matriz de cifragem e os textos criptografados e descriptografados
function updateCipher() {
    // Gera um valor de deslocamento aleatório entre 1 e 5
    const shift = getRandomInt(1, 5);

    // Gera um novo alfabeto deslocado com base no valor de deslocamento gerado
    shiftedAlphabet = generateShiftedAlphabet(shift);

    // Obtém o texto de entrada do campo de entrada no HTML
    const inputText = document.getElementById('inputText').value;

    // Criptografa o texto de entrada usando o novo alfabeto deslocado
    const encryptedText = encrypt(inputText);

    // Descriptografa o texto criptografado para confirmar a consistência
    const decryptedText = decrypt(encryptedText);

    // Atualiza o elemento HTML para mostrar o texto criptografado
    document.getElementById('encryptedText').textContent = encryptedText;

    // Atualiza o elemento HTML para mostrar o texto descriptografado
    document.getElementById('decryptedText').textContent = decryptedText;

    // Atualiza o elemento HTML para mostrar o alfabeto original
    document.getElementById('originalAlphabet').textContent = originalAlphabet;

    // Atualiza o elemento HTML para mostrar o novo alfabeto deslocado
    document.getElementById('shiftedAlphabet').textContent = shiftedAlphabet;
}

// Adiciona um evento ao botão de criptografar
document.getElementById('encryptBtn').addEventListener('click', function() {
    // Obtém o texto de entrada do campo de entrada no HTML
    const inputText = document.getElementById('inputText').value;

    // Criptografa o texto de entrada usando o alfabeto deslocado atual
    const encryptedText = encrypt(inputText);

    // Atualiza o elemento HTML para mostrar o texto criptografado
    document.getElementById('encryptedText').textContent = encryptedText;

    // Limpa o campo onde é exibido o texto descriptografado
    document.getElementById('decryptedText').textContent = '';

    // Limpa o campo de entrada de texto
    document.getElementById('inputText').value = '';
});

// Adiciona um evento ao botão de descriptografar
document.getElementById('decryptBtn').addEventListener('click', function() {
    // Obtém o texto de entrada do campo de entrada no HTML
    const inputText = document.getElementById('inputText').value;

    // Descriptografa o texto de entrada usando o alfabeto deslocado atual
    const decryptedText = decrypt(inputText);

    // Atualiza o elemento HTML para mostrar o texto descriptografado
    document.getElementById('decryptedText').textContent = decryptedText;

    // Limpa o campo de entrada de texto
    document.getElementById('inputText').value = '';
});

// Adiciona um evento ao botão de mudar a matriz de cifragem
document.getElementById('changeCipherBtn').addEventListener('click', updateCipher);

// Função para atualizar a matriz de cifragem quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', updateCipher);