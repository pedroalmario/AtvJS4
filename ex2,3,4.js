let numeros =[1,2,3,4,5]
let dobroNumeroa = numeros.map((numeros)=>{
    return numeros *2
})
let numerosPares = numeros.filter((num)=>{
    return num %2 === 0
})
console.log(dobroNumeroa);
console.log(numerosPares);

// 2. Utilize os 3 parâmetros para serem passados na tela:
// a. Valor;
// b. Índice;
// c. Array.
// 3. Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar
// um novo array contendo o dobro de cada elemento.
// 4. Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar
// um novo array contendo apenas os números pares.
