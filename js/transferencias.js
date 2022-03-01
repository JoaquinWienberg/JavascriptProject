let saldoInicial = localStorage.getItem("saldo");
var destinatario = $(".contactList");
var importe = $("#inputImporte");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let movimientoInicial = controlarMov();

function controlarMov () {
    if (localStorage.getItem("movimientos") == null) {
        var gral = [{movimiento: "Saldo inicial", fecha: "inicio", importe: parseInt(saldoInicial)}];
        localStorage.setItem("movimientos", JSON.stringify(gral));
    } else {
        return 0
    }
}

function actualizarSaldo (saldoFinal){
    localStorage.setItem("saldo" , saldoFinal)
}

// Transferir a contacto

$("#btnTransf2").on("click", function() {
    if (parseInt(importe.val()) > parseInt(saldoInicial)) {
        $(".transferEnding").append("<p class='bg-danger py-1 text-light postMsg'>El importe introducido supera el total del saldo en la cuenta. Por favor intente con un importe menor. </p>")
    } else {
    saldoFinal = parseInt(localStorage.getItem("saldo"))- parseInt(importe.val());
    actualizarSaldo(saldoFinal);
    var infoExtracto = {movimiento: "Transferencia - Destinatario: " + destinatario.val() , fecha: date, importe: "- " + parseInt(importe.val())}
    var movimientos = JSON.parse(localStorage.getItem("movimientos"));
    movimientos.push(infoExtracto);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
    console.log ("Se ha realizado la transferencia con exito.")
    $(".transferEnding").append("<p class='bg-success py-1 px-2 text-light postMsg'>La transferencia se ha realizado con éxito! </p>")
    }   
})
