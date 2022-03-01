//Variables iniciales
let importeDepo = document.getElementById('inputImporte');
let btnDepo = document.getElementById('btnDeposit');
let saldoInicial = localStorage.getItem("saldo");
localStorage.setItem("saldo", saldoInicial)
let saldoActual = localStorage.getItem("saldo");
let mensaje = document.getElementById('mensaje');

//Extracto de movimientos

let movimientoInicial = controlarMov();

function controlarMov () {
    if (localStorage.getItem("movimientos") == null) {
        var gral = [{movimiento: "Saldo inicial", fecha: "inicio", importe: parseInt(saldoInicial)}];
        localStorage.setItem("movimientos", JSON.stringify(gral));
    } else {
        return 0
    }
}

//Actualizar saldo en localStorage

function actualizarSaldo (saldoFinal){
    localStorage.setItem("saldo" , saldoFinal)
}

// Funcion depositar dinero

btnDepo.addEventListener("click", function(){
    if (btnDepo.innerText == "Depositar"){
        saldoFinal = parseInt(localStorage.getItem("saldo")) + parseInt(importeDepo.value);
        actualizarSaldo(saldoFinal);
        console.log("El nuevo saldo es " + localStorage.getItem("saldo"))
        importeDepo.value = 0.00;
        actualizarMensaje();
        var infoExtracto = {movimiento: "Deposito de efectivo" , fecha: date, importe: "+ " + parseInt(importeDepo.value)}
        var movimientos = JSON.parse(localStorage.getItem("movimientos"));
        movimientos.push(infoExtracto);
        localStorage.setItem("movimientos", JSON.stringify(movimientos));
    } else {
        if (parseInt(importeDepo.value) < parseInt(localStorage.getItem("saldo"))){
            saldoFinal = parseInt(localStorage.getItem("saldo")) - parseInt(importeDepo.value);
            actualizarSaldo(saldoFinal);
            console.log("El nuevo saldo es " + localStorage.getItem("saldo"))
            importeDepo.value = 0.00;
            actualizarMensaje();
            var infoExtracto = {movimiento: "Retiro de efectivo" , fecha: date, importe: "- " + parseInt(importeDepo.value)}
            var movimientos = JSON.parse(localStorage.getItem("movimientos"));
            movimientos.push(infoExtracto);
            localStorage.setItem("movimientos", JSON.stringify(movimientos));
        } else {
            actualizarMensajeError();
        }
    }
})

// Función mensaje de saldo actualizado 


function actualizarMensaje() {
    mensaje.innerHTML = "<p class='bg-success text-light postMsg'> La operación se ha realizado con éxito. Su nuevo saldo es de " + localStorage.getItem("saldo") + " pesos. </p>";
}

function actualizarMensajeError() {
    mensaje.innerHTML = "<p class='bg-danger text-light postMsg'> No puede retirar un importe mayor al de su cuenta. Por favor intente nuevamente. </p>";
}