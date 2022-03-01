// Generador de contacto

class destinatario {
    constructor (nro, nombre, apellido, relacion, favorito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.relacion = relacion;
        this.favorito = true;
        this.nro = JSON.parse(localStorage.getItem("contactos")).length + 1;
    }

    darFavorito() {
        this.favorito = true;
    }
}

function sortArray (x, y) {
    return x.nombre.localeCompare(y.nombre);
}

var contactosIniciales = controlContactos();

function controlContactos (){
    if (localStorage.getItem("contactos") == null){
        return [{nro: 1, nombre: "JUAN", apellido: "PEREZ", relacion: "PADRE", favorito: true, imagen: "profile.png"},
        { nro: 2, nombre: "ANA", apellido: "FERNANDEZ", relacion: "PROVEEDOR", favorito: false, imagen: "profile.png"}];;
    } else {
        return JSON.parse(localStorage.getItem("contactos"));
    }
}
var contJSON = JSON.stringify(contactosIniciales);
localStorage.setItem("contactos", contJSON);
var contactosCargados = JSON.parse(localStorage.getItem("contactos"));

let bienv = document.getElementById("bienvenida");
let nombre1 = localStorage.getItem("nombre");
//bienv.innerText = "Bienvenido al sitio " + nombre1 + ".";


let listado = "";

for (let agenda of contactosCargados) {
    let contacto = new destinatario (agenda);
    listado += "<div class='col-md-4 p-4'>";
    listado += "<div class='card bg-light shadow-lg'>";
    listado += "<h4 class='card-title text-center'>" + agenda.nombre + " " +  agenda.apellido + "</h5>";
    listado += "<img src='images/" + agenda.imagen + "' class='card-img-top' alt='" + agenda.nombre + "'>";
    listado += "<div class='card-body'>";
    listado += "<div class='col-md-12 ms-2'>Relación del contacto: " + agenda.relacion + "</div>";
    listado += "<a href='transferir.html' class='btn btn-primary btn-outline-danger bg-dark text-white ms-2 btnTransf'>Transferir</a>";
    listado += "<a href='' id='" + agenda.nro+  "' class='btn btn-primary btn-outline-danger bg-danger text-white ms-2 btnDel'>Eliminar</a>";
    listado += "</div>";
    listado += "</div>";
    listado += "</div>";
}

let listadoContactos = document.getElementById("contactos");
listadoContactos.innerHTML = listado;

// Control del saldo inicial

let saldoInicial = controlSaldo();
function controlSaldo (){
    if (localStorage.getItem("saldo") == null){
        return 100000;
    } else {
        return parseInt(localStorage.getItem("saldo"));
    }
}
localStorage.setItem("saldo", saldoInicial)
let saldoActual = localStorage.getItem("saldo");

function actualizarSaldo (saldoActual){
    localStorage.setItem("saldo" , saldoActual)
}


//Agregar nuevo contacto

let nuevoNombre = document.getElementById("nombreContacto");
let nuevoApellido = document.getElementById("apellidoContacto");
let nuevoRelacion = document.getElementById("relacionContacto");
let nuevoFav = document.getElementById("favContacto");
let btnAltaContacto = document.getElementById("altaContacto");

btnAltaContacto.addEventListener("click", function () {
    let nuevoContacto = {nro: JSON.parse(localStorage.getItem("contactos")).length + 1, nombre: nuevoNombre.value.toUpperCase(), apellido: nuevoApellido.value.toUpperCase(), relacion: nuevoRelacion.value.toUpperCase(), favorito: nuevoFav.checked, imagen: "profile.png"};
    contactosIniciales.push(nuevoContacto);
    console.log (nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactosIniciales));
    console.log(JSON.parse(localStorage.getItem("contactos")));
    contactosCargados = JSON.parse(localStorage.getItem("contactos"));
    listado += "<div class='col-md-6 p-4'>";
    listado += "<div class='card bg-light shadow-lg'>";
    listado += "<h4 class='card-title text-center'>" + nuevoContacto.nombre + " " +  nuevoContacto.apellido + "</h5>";
    listado += "<img src='images/" + nuevoContacto.imagen + "' class='card-img-top' alt='" + nuevoContacto.nombre + "'>";
    listado += "<div class='card-body'>";
    listado += "<div class='col-md-12 ms-2'>Relación del contacto: " + nuevoContacto.relacion + "</div>";
    listado += "<a href='transferir.html' class='btn btn-primary btn-outline-danger bg-dark text-white ms-2 btnTransf'>Transferir</a>";
    listado += "<a href='' type='button' onclick='window.location.href='transferencias.html'' id='" + nuevoContacto.nro+  "' class='btn btn-primary btn-outline-danger bg-danger text-white ms-2 btnDel'>Eliminar</a>";
    listado += "</div>";
    listado += "</div>";
    listado += "</div>";
})

// Informe de saldo de cuenta

let informeSaldo = document.getElementById("informeSaldo");
informeSaldo.innerHTML = "<span class='sp1 spanSaldo'>S</span><span class='sp2 spanSaldo'>a</span><span class='sp3 spanSaldo'>l</span><span class='sp4 spanSaldo'>d</span><span class='sp5 spanSaldo'>o</span><span class='sp6 spanSaldo'> </span><span class='sp7 spanSaldo'>e</span><span class='sp8 spanSaldo'>n</span><span class='sp9 spanSaldo'> </span><span class='sp10 spanSaldo'>c</span><span class='sp11 spanSaldo'>a</span><span class='sp12 spanSaldo'>j</span><span class='sp13 spanSaldo'>a</span><span class='sp14 spanSaldo'> </span><span class='sp15 spanSaldo'>d</span><span class='sp16 spanSaldo'>e</span><span class='sp17 spanSaldo'> </span><span class='sp18 spanSaldo'>a</span><span class='sp19 spanSaldo'>h</span><span class='sp20 spanSaldo'>o</span><span class='sp21 spanSaldo'>r</span><span class='sp22 spanSaldo'>r</span><span class='sp23 spanSaldo'>o</span><span class='sp24 spanSaldo'> </span><span class='sp25 spanSaldo'>:</span>" + "<span class='saldoRes'> " + parseInt(localStorage.getItem("saldo")).toLocaleString() + "</span>";




