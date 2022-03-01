var capital = document.getElementById("capitalNro");
var dias = document.getElementById("diasNro");
var btnCalcular = document.getElementById("btnCalcular");
var resultadoMensaje = document.getElementById("resultadoRend");

function calcularRend (){
    rendimiento = parseInt(capital.value) * (parseInt(dias.value) / 365 ) * chequearInst ();
    console.log("El rendimiento es de " + rendimiento + " pesos argentinos.")
    
}

function chequearInst (){
    if (document.querySelector(".activos").value == "Fondos comunes de inversión"){
        return 0.55;
    } else if (document.querySelector(".activos").value == "Plazo fijo"){
            return 0.35;
        } else {
            console.log("error en el input");
        }
}

btnCalcular.addEventListener("click", function () {
    rendimiento = parseInt(capital.value) * (parseInt(dias.value) / 365 ) * chequearInst ();
    console.log("El rendimiento es de " + rendimiento + " pesos argentinos.");
    resultadoMensaje.innerText = "El rendimiento esperado es de " + Math.round(rendimiento) + " pesos argentinos."
});
