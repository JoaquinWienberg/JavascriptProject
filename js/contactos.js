window.addEventListener("load", function (){
    console.log ("Los elementos del sitio se han cargado.")
})

// Eliminacion de contacto
var btnDelete = $(".btnDel");

$(".btnDel").on("click", function() {
    var eleID = parseInt(this.id);
    cargarContactos2 = JSON.parse(localStorage.getItem("contactos"));
    cargarContactos2.splice(eleID - 1, 1);
    localStorage.setItem("contactos", JSON.stringify (cargarContactos2));
    console.log ("Se ha eliminado correctamente al contacto.")
})

// Display cantidad de contactos

$(".ventanaContactos").prepend("<p class='text-light bg-dark cantCont'>Cantidad de contactos : " + JSON.parse(localStorage.getItem("contactos")).length +"</p>");
$(".cantCont").css("letter-spacing", "5px");


$(".dispNew").on("click", function (){
    $(".contenidoContactos").toggle("fast");
});

function fadeLoop () {
    $(".cantCont").css("letter-spacing", "5px")
                .delay(300)
                .fadeOut(500)
                .fadeIn(1000)
                .css("padding-left", "10px")
}

for (let i = 0; i < 100; i++){
    fadeLoop();
}

// Contact options

var contactSel = $(".contactList");
var contactosCargados = JSON.parse(localStorage.getItem("contactos"));

for (let names of contactosCargados) {
    $(".contactList").append("<option>" + names.nombre + " " + names.apellido + "</option>")
}

