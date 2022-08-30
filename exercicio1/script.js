// Construa um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima no console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? 
// d) O que acontece no console se o usuário inserir um número ímpar? 

let numero = Number(prompt("insira um numero par!"))
 
console.log(numero % 2)

// o codigo executa perfeitamente divisoes com numeros pares e retorna sempre ao fim da divisao que é 0.
// quando inserimos um numero impar, o resultado da 1 pois é o resto da divisao.