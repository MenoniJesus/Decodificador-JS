// Função para gerar um número inteiro aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Matriz bidimensional para armazenar o alfabeto original e o alfabeto deslocado
let alphabetMatrix = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // Alfabeto original no índice 0
    '' // Alfabeto deslocado será armazenado no índice 1
];

// Função para gerar o alfabeto deslocado com base em um valor de deslocamento
function generateShiftedAlphabet(shift) {
    // Atualiza o alfabeto deslocado com o deslocamento fornecido
    alphabetMatrix[1] = alphabetMatrix[0].slice(shift) + alphabetMatrix[0].slice(0, shift);
}

// Inicializa o alfabeto deslocado com um deslocamento aleatório entre 1 e 5
generateShiftedAlphabet(getRandomInt(1, 5));

// Função para criptografar um texto usando o alfabeto deslocado
function encrypt(text) {
    return text.toUpperCase().split('').map(char => {
        // Encontra o índice da letra no alfabeto original
        const index = alphabetMatrix[0].indexOf(char);
        // Substitui a letra pela correspondente no alfabeto deslocado, se encontrada
        return index !== -1 ? alphabetMatrix[1][index] : char;
    }).join(''); // Junta as letras criptografadas em uma única string
}

// Função para descriptografar um texto usando o alfabeto deslocado
function decrypt(text) {
    return text.toUpperCase().split('').map(char => {
        // Encontra o índice da letra no alfabeto deslocado
        const index = alphabetMatrix[1].indexOf(char);
        // Substitui a letra pela correspondente no alfabeto original, se encontrada
        return index !== -1 ? alphabetMatrix[0][index] : char;
    }).join(''); // Junta as letras descriptografadas em uma única string
}

// Função para atualizar o alfabeto deslocado e atualizar a interface do usuário
function updateCipher() {
    // Gera um novo deslocamento aleatório e atualiza o alfabeto deslocado
    const shift = getRandomInt(1, 5);
    generateShiftedAlphabet(shift);

    // Atualiza o elemento HTML para mostrar o alfabeto original
    document.getElementById('originalAlphabet').textContent = alphabetMatrix[0];

    // Atualiza o elemento HTML para mostrar o novo alfabeto deslocado
    document.getElementById('shiftedAlphabet').textContent = alphabetMatrix[1];
}

// Adiciona um evento ao botão de criptografar para criptografar o texto de entrada
document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('encryptedText').textContent = encryptedText; // Exibe o texto criptografado
    document.getElementById('decryptedText').textContent = ''; // Limpa o texto descriptografado
    document.getElementById('inputText').value = ''; // Limpa o campo de entrada
});

// Adiciona um evento ao botão de descriptografar para descriptografar o texto de entrada
document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('decryptedText').textContent = decryptedText; // Exibe o texto descriptografado
    document.getElementById('inputText').value = ''; // Limpa o campo de entrada
});

// Adiciona um evento ao botão de alterar cifra para atualizar o alfabeto deslocado
document.getElementById('changeCipherBtn').addEventListener('click', updateCipher);

// Atualiza o alfabeto deslocado quando o documento é carregado
document.addEventListener('DOMContentLoaded', updateCipher);