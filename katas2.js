
//Esse programa faz operações matemáticas usando apenas o operador de soma.
let soma = 0//variável para soma de valores nas funções
 
//função para simar valores
function add (soma1,soma2){
    soma = soma1 + soma2;
    return soma
}  
   
console.log('Teste da função ADD. O RESULTADO é '+add(2,3))
     
// Função para multiplicar valores
function multiply(arg1,arg2){
       
 soma = 0
 for(let i = 0; i<arg2; i++){
      soma = add(soma,arg1) 
    }

    return soma
    
}    

console.log('Teste da função MULTIPLY. O RESULTADO é '+multiply(2,3))

//Função para fazer potência de valores
function power(arg1,arg2){
    soma = arg1
    
   for(let i = 0; i<arg2-1; i++){
       soma =multiply(soma,arg1)

    } 
    return soma 
     
}

console.log('Teste da função POWER. O RESULTADO é ' +power(2,3))




// função fatorial
function factorial(arg1){
    soma = 1

    for(let i = 1; i<=arg1; i++){
        soma = multiply(soma,i)
       
    }
    return soma
}

console.log('Teste da função FACTORIAL. O RESULTADO é ' +factorial(10))

