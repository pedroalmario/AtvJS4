let idade =[16, 48, 23, 22, 45, 8, 12]

let idadeLimite = idade.filter((idade)=>{
    return idade > 18
})
idadeLimite.forEach((idade) =>{
    console.log(`Sua idade é: ${idade}`);
    console.log(`A faixa de pessoas que sao maiores de idade: ${idadeLimite}`);
    console.log('========================');
});



