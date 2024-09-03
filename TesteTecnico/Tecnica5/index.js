// Função para inverter uma string
function TranscreverString(str) {
    let resultado = ''; // String que armazenará o resultado
    // Itera sobre a string original de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]; // Adiciona o caractere ao resultado
    }
    return resultado; // Retorna a string invertida
}

// Exemplo de uso com uma string previamente definida
const stringOriginal = "obrigado pelo test!";
const stringInvertida = TranscreverString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
