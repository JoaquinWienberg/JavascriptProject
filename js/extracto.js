var movimientos = JSON.parse(localStorage.getItem("movimientos"));

for (let mov of movimientos){
    $(".planillaMovimientos").prepend("<div class='col-12 p-2 justify-content-md-between bankMovement'><span class='bankLine1'>" + mov.fecha + "</span><span class='bankLine2'>" + mov.movimiento + "</span><span class='bankLine3'> " + mov.importe.toLocaleString() + " </span></div>")
}