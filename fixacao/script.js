const paragrafo = document.getElementById('paragrafo')
console.log(paragrafo.innerHTML)

const input = document.getElementById('texto')

console.log(input)
console.log(input.value)

const digitaInput = () => {
    console.log(input.value)
}

const trocaConteudo = () => {
    paragrafo.innerHTML = input.value

    input.value = ''
}