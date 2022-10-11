/*

creare una casella input che permmetta l'inserimento di un indirizzo mail,
far si che tale casella venga controllata e checkata con un array di mail,
se mail presente permettere "login",
accedere giochino dadi,
creare array 1-6,
checckare in modo che results > vinca

*/

//creo array con lista email
const userMails = ['user@boolean.it', 'user1@boolean.it', 'user2@boolean.it', 'user3@boolean.it', 'user4@boolean.it'];

//prendo gli elementi per poterci interagire

let btn = document.querySelector('button');

//creo un nuovo elemento che metta a display una risposta dopo il login

let risp = document.getElementById('risposta');

//creo il loop che scannerizzi l'array

let mailRegistered;

const check = function(){
    let eMail = document.getElementById('usermail');
    let mailRegistered;

    for (let i = 0; i < userMails.length; i++) {
    
        if (eMail.value === userMails[i]) {
    
            mailRegistered = true;
            
        }
    }
    // creo un messaggio per l'utente che ritorni se la mail era presente o meno
    risp.innerHTML = '';
    let answer = document.createElement('div');

    if(mailRegistered){
        answer.className = "window"
        answer.textContent = "Benvenut*!!!"
    }else{
        answer.className = "window"
        answer.textContent = "Sembrerebbe che non ci conosciamo, chi sei?"
    };

    risp.append(answer);
};

// creo un event che al premere sul pulsante di login mi faccia partire la funzione check mail

btn.addEventListener('click', check);







