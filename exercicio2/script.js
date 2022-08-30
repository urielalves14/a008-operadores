// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true
// divisível = com resto zero
// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const numero1 = prompt("Digite um numero qualquer.")
console.log("seu numero foi." , numero1)
const numero2 = prompt("Digite outro numero.")
console.log("seu segundo numero foi." , numero2)


console.log("o primeiro numero é maior que o segundo?" , numero1 > numero2)
console.log("o primeiro numero é igual ao segundo?" , numero1 === numero2)
console.log("o primeiro numero é divisivel pelo segundo?" , numero1 % numero2 === 0)
console.log("o segundo numero é divisivel pelo primeiro?" , numero2 % numero1 === 0)
