//Verifica se numero é primo

let numero = 1500450271;
let i = 2;
let cont = 0;

while (i < numero){
    if (numero % i == 0) {
        cont++;
    }
    i++;
}

if (cont == 0){
    console.log(`Sim, o número ${numero} é primo!`)
}else{
    console.log(`Não, o número ${numero} não é primo!`)
}