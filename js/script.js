/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/




/*
var distance;
while (isNaN(distance = prompt("quanti kilometri devi percorrere? (solo numeri)")));

var age;
while (isNaN(age = prompt("quanti anni hai (solo numeri)")));  */



 



var btn = document.getElementById('submit');
btn.addEventListener('click',

    function() {
        const FnSname = document.getElementById("FnSname").value;
        const distance = (document.getElementById("distance").value);
        const age = (document.getElementById("age").value); 
        const price = parseFloat (distance * 0.21);   
        const discount18 = parseFloat ( price * .20);
        const discount65 = parseFloat ( price * .40); 
        console.log('Nome Passegero:', FnSname)
        console.log('Distanza da percorrere:', distance)
        console.log('Età Passeggero:', age) 
        console.log ('prezzo biglietto intero', price);
        console.log ('da scontare x 18enne',  discount18);
        console.log ('sconto anziani', discount65);
        document.getElementById("passenger_name").innerHTML = FnSname; 
        
        if (age < 18) {
            console.log('Prezzo biglietto scontato minori 18', (price - discount18).toFixed(2) );
            document.getElementById("prezzo-finale").innerHTML = (price - discount18).toFixed(2);
        } else if (age >= 65 ) {
            console.log ('prezzo scontato anzianità ',  (price - discount65).toFixed(2));
            document.getElementById("prezzo-finale").innerHTML = (price - discount65).toFixed(2);
        } else {
            console.log ('prezzo intero', price.toFixed(2))
            document.getElementById("prezzo-finale").innerHTML = price.toFixed(2);
        }



        if (age < 18) {
            document.getElementById("offer").innerHTML = ('Biglietto under 18');
        } else if (age >= 65 ) {
            document.getElementById("offer").innerHTML = ('Biglietto over 64');
        } else {
            document.getElementById("offer").innerHTML = ('Biglietto standard');
        }

        document.getElementById("cab").innerHTML = Math.floor(Math.random() * 10 + 1);
        document.getElementById("CP_code").innerHTML = Math.floor(Math.random() * 100000);
        
    }

);

 








