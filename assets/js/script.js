// scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampo Fizz
// per i multipli di 5 stampo Buzz
// per i multipli sia di 3 che di 5 stampo Buzz



//intanto scrivo un ciclo di numero che va da 1 a 100
//VARIABILI;
//inizializzo un'array; 
//listaNumeri = array contenente i 100 numeri

var listaNumeri = [];
console.log(listaNumeri);

//PROCEDIMENTO;
//inizializzo il vettore di 100 numeri vuoto, con un ciclo for lo riempio;
//con un ciclo for lo scorro e inserisco le condizioni per il fizz, il buzz ed entrambi;
  
//for(dichiaro la i e assegno ad i il valore inziale 0; condizione per il ciclo i<100; incremento i = i++){ in posizione i di array numeri assegno il valore di i incrementato di 1 listaNumeri[i]=i+1; 

for(var i = 0 ; i < 100; i++ ){
     listaNumeri[i]=i+1;

    /* SE è divisibile per tre (%3) ed è uguale a 0 (=== 0) e (&&)  NON è divisibile per cinque (%5)  quindi avrò il risultato diverso da 0(!== 0) {
     allora faccio stampare fizz
      (console.log("Fizz");
    }ALTRIMENTI  SE  NON è divisibile per tre (%3) e non è uguale a 0 (!== 0) e (&&)  è divisibile per cinque (%5)  quindi avrò il risultato uguale a 0(=== 0){
      allora faccio stampare buzz
      (console.log("Buzz");
    } ALTRIMENTI  SE è divisibile per tre (%3) ed è uguale a 0 (=== 0) e (&&)  è divisibile per cinque (%5)ed è uguale a 0 (=== 0){
      allora faccio stampare fizzbuzz
      (console.log("FizzBuzz");
    }ALTRIMENTI{
      faccio stampare il numero
      (console.log(listaNumeri[i]);
  }*/

  if(listaNumeri[i] % 3 === 0 && listaNumeri[i] %5 !==0){
    console.log("Fizz");
  }else if(listaNumeri[i] % 3 !== 0 && listaNumeri[i] % 5===0){
    console.log("Buzz");
  }else if(listaNumeri[i] % 3 === 0 && listaNumeri[i] % 5===0){
    console.log("FizzBuzz");
  }else{
    console.log(listaNumeri[i]);
  } 
}
