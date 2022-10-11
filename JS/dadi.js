/*

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer,

stabilire chi vince in base a quale rapporto,

stampare messsaggio vittoria


*/


//creo variabili da attacare all'HTML
let lancia = document.getElementById('gioca');
let result = document.getElementById('risultato');


//costruisco la funzione per lanciare i dadi


let play = function () {

    const giocatore = Math.floor(Math.random() * 6 + 1);
    const computer = Math.floor(Math.random() * 6 + 1);

    if(giocatore > computer){
        
        result.innerHTML = 'Human wins! Rolling:' +giocatore;
        
   
    }else if (giocatore < computer){

        result.innerHTML = 'Machine wins! Rolling: ' +computer;
    
    }else{

        result.innerHTML = 'Draw! Both players rolled:' + giocatore;
    };
}

lancia.addEventListener('click', play);


