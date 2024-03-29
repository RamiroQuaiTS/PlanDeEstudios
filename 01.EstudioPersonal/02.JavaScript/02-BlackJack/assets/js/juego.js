// C = (clubs)Treboles
// D = (diaminds)Diamantes
// H = (hearts)Corazones
// S = (spades)Espadas

(miModulo=>{
    'use strict'

    let deck        = [],
        puntosJuadores = [];

    const tipos     = ['C', 'D', 'H', 'S'],
          espciales = ['A', 'J', 'Q', 'K'];

    let numeroCartasJugador  = 0,
        numeroCartasIA = 0;       

    //Referncias html
    const btnNuevo   = document.querySelector("#btnNuevo"),
          btnPedir   = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),

          etiquetaJugador = document.querySelector('#etiquetaJ1'),
          etiquetaIA      = document.querySelector('#etiquetaIA'),

          puntosJugadoresDom = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll(".divCartas");

    const inicializarJuego = () => {
        crearDeck();
        numeroJugadores();
    };

    const numeroJugadores = (numJugadores = 1) =>{
        for(let i = 0; i <= numJugadores; i++){
            puntosJuadores[i] = 0;
        }
    }

    //función para llenar el deck que es un arreglo con todas las cartas
    const crearDeck = () => {
        deck =[];
        for(let i = 2; i<=10; i++){
            for(let tipo of tipos){
                deck.push(`${i}${tipo}`)
            }
        }

        for(let tipo of tipos){
            for(let especial of espciales){
                deck.push(`${especial}${tipo}`)
            }
        }
        deck = _.shuffle(deck);
    }

    //función para pedir una carta
    const pedirCarta = () => {
        return deck.length === 0 ? "Ya no hay cartas" : deck.pop()
    }

    //función para saber el valor de la carta
    const valorCarta = (carta, turno = 0) =>{
        const valor = carta.substring(0, carta.length-1);
        return valor === "A" ? 
                turno == 0 ? prompt("El valor de la carta es A. ¿Deseas que su valor sea 1 u 11?", "1") : 11 :
                (!isNaN(valor)) ? valor*1 : 10;
    }

    // turno del jugador el ultimo será la computuradora
    const acumuladoPuntos =(carta, turno) => {
        puntosJuadores[turno] = puntosJuadores[turno] + valorCarta(carta, turno)*1;
        puntosJugadoresDom[turno].innerText = puntosJuadores[turno];
        return puntosJuadores[turno]
    }

    const turnoIA = (puntoMinimos) => {
        numeroCartasIA++;
        divCartasJugadores[divCartasJugadores.length-1].innerHTML = '';
        do{ 
            const carta = pedirCarta();
            acumuladoPuntos(carta, puntosJuadores.length - 1)
            
            crearCarta(carta, puntosJuadores.length - 1)

            if(numeroCartasIA === 5){
                mensajeVictoria('IA');
                btnPedir.disabled = true;
                btnDetener.disabled = true;
            }
        }while((puntosJuadores[divCartasJugadores.length-1] <= puntoMinimos) && (puntoMinimos  <= 21));

        setTimeout(() => {
            const ganador = puntosJuadores[divCartasJugadores.length-1]=== puntoMinimos ? "" :
            puntoMinimos > 21 ? "IA" :
            puntosJuadores[divCartasJugadores.length-1] > 21 ? "Jugador" :
            puntosJuadores[divCartasJugadores.length-1] <= 21 && puntoMinimos >21 ? "IA" : 
            puntoMinimos <= 21 && puntosJuadores[divCartasJugadores.length-1] <= 21 ? 
            puntosJuadores[divCartasJugadores.length-1] > puntoMinimos ? "IA" : "Jugador" 
            :"";

            mensajeVictoria(ganador); 
        }, 50);   

    }

    //Función que arrojará el mensaje con el ganador
    const mensajeVictoria = (ganador = "") => {
        if(ganador != ""){
            //alert(`${ganador} es el ganador`);
            if(ganador === 'IA'){
                etiquetaJugador.style.color = 'red';
                etiquetaIA.style.color = 'green';
            }else{
                etiquetaJugador.style.color = 'green';
                etiquetaIA.style.color = 'red';
            }
        }else{
            alert(`Esto es un empate`);
        }    
    }

    //Limpia la pantalla
    const limpiarPartida = () =>{
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        let tipoCarta;

        for(let i = 0; i <= divCartasJugadores.length -1; i++){
            tipoCarta = i % 2 === 0 ? "red_back" : "grey_back";
            puntosJugadoresDom[i].innerText = 0;
            divCartasJugadores[i].innerHTML = `<img class="carta" src="assets/cartas/${tipoCarta}.png" alt="">`;
        }
        
        etiquetaJugador.style.color = 'white';
        etiquetaIA.style.color = 'white';
        inicializarJuego();
        numeroCartasJugador = 0;
        numeroCartasIA = 0
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.className = "carta";
        imgCarta.src = `assets/cartas/${carta}.png`;

        if(puntosJugadoresDom[turno].innerText === '0'){
            divCartasJugadores[turno].innerHTML = '';
        }

        divCartasJugadores[turno].append(imgCarta);
    }

    inicializarJuego();



    //Eventos
    btnPedir.addEventListener('click', () =>{   
        numeroCartasJugador++;
        const carta = pedirCarta();

        crearCarta(carta, 0)
        const puntosJugador = acumuladoPuntos(carta, 0);
        console.log(puntosJugador);       

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoIA(puntosJugador);
        }else if(puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoIA(puntosJugador);
        }else if(numeroCartasJugador === 5){
            mensajeVictoria('Jugador');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    });

    btnDetener.addEventListener('click', ()=>{
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoIA(puntosJuadores[0]);    
    });

    btnNuevo.addEventListener('click', () =>{
        limpiarPartida();
    });
})();

