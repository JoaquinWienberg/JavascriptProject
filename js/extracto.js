var movimientos = JSON.parse(localStorage.getItem("movimientos"));

for (let mov of movimientos){
    $(".planillaMovimientos").prepend("<div class='mx-4 justify-content-md-center bankMovement'><span class='bankLine1'>" + mov.fecha + "</span> - <span class='bankLine2'>" + mov.movimiento + "</span> - <span class='bankLine3'> " + mov.importe.toLocaleString() + " </span></div>")
}