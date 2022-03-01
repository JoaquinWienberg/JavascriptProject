let contra = document.getElementById('contrasena');
let usuario = document.getElementById('usuario');
let btn = document.getElementById('button');

contra.addEventListener("input", function(){
    btn.disabled = (this.value === '');
})

usuario.addEventListener("input", function(){
    btn.disabled = (this.value === '');
}) 

btn.addEventListener("click", function(){
    let nombre = usuario.value;
    localStorage.setItem("nombre", nombre)
})

