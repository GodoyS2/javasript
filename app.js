console.log("Olá Mundo!")
console.log(10 + 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - (3 / 4.5))
console.log((4 + 4 + 4 + 4) / 4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)

/* 
-variavel é um espaço reservado na memória para armazenar um valor
-toda variável tem um nome e um tipo 
- a variável deve ter um nome significativo, exemplo:
    - uma variável que vai armazenar a informação idade pode ter o nome de IDADE, 
    uma variável que vai armazenar o preço de venda de um produto poder ter o nome PRECOVENDA
    - a recomendação é que o nome da variável seja simples e significativo, 
    sem caractéres especiais, sem acento, sem espaço e lembrando que o javascript diferência maiúsculas de minúsculas, isso significa que PrecoVenda é diferente de precovenda.
*/

let nome = 'Godoy'
let idade = 18
let nota1 = 7.5
let fumante = false

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é' + nota1)

/* tipos */

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof nota1)
console.log(typeof fumante)

let veiculos = ['carro', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)

let cliente = {
    nome: 'Godoy',
    idade: 18
}

console.log(cliente)
console.log(typeof cliente)

let salvar = function () {

}

console.log(typeof salvar)

/* operadores realacionais */
console.log(10 > 3)
console.log(5 < 3)
console.log(15 >= 10)
console.log(15 <= 10)
console.log(10 == 10)
console.log(10 != 10)

/* operadores lógicos */
console.log('==========')
console.log(10 > 3 && 10 > 5)

console.log(10 > 3 || 10 > 15 || 10 > 8) //operador OU (OR)

console.log(!10 > 3) //Operador NÃO(NOT)

//alert("Olá Mundo")


function Rosa() {



    //document.write("<h3>Olá Mundo</h3>")
    document.getElementById('titulo').innerHTML = 'Aula 02 de JS'

    document.getElementById('texto').innerHTML = 'Vamos estudar interação com o DOM'

    document.body.style.backgroundColor = 'yellow'
    document.body.style.color = 'black'





}

function Laranja() {
    document.body.style.backgroundColor = 'orangered'
    document.body.style.color = 'lightblue'
}


