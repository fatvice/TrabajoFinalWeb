//Ingreso de datos de usuario
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let pass = document.querySelector("#pass-txt").value.trim();
    let estacionamiento = document.querySelector("#estacionamiento-txt").value.trim();
    let bodega = document.querySelector("#bodega-txt").value.trim();
    
    let usuario={};
    usuario.rut=rut;
    usuario.nombre=nombre;
    usuario.pass = pass;
    usuario.estacionamiento = estacionamiento;
    usuario.bodega = bodega;
    console.log(usuario);
    Swal.fire("Usuario ingresado");
});