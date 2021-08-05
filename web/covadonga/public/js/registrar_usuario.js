//Ingreso de datos de usuario
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let pass = document.querySelector("#pass-txt").value.trim();
    let estacionamiento = +document.querySelector("#estacionamiento-txt").value.trim();
    let bodega = +document.querySelector("#bodega-txt").value.trim();
    let moroso = document.querySelector("#moroso-no-rb").checked ? "0": "1";

    let errores=[];
    if(rut.length>0 && rut.length<10){
        errores.push("El rut debe tener 10 caracteres o estar vacio");
    }
    if(nombre===""){
        errores.push("Debe ingresar un nombre");
    }
    if(nombre.length>70){
        errores.push("El nombre debe tener menos de 70 caracteres");
    }
    if(pass===""){
        errores.push("Debe ingresar una contraseña");
    }
    if(pass.length<4){
        errores.push("La contraseña debe tener al menos 4 caracteres");
    }
    if(estacionamiento>70 || estacionamiento<0){
        errores.push("Debe ingresar un estacionamiento valido menor a 70 y mayor a -1");
    }
    if(bodega>20 || bodega<0){
        errores.push("Debe ingresar una bodega valida menor a 20 y mayor a -1");
    }
    //TODO: verificacion de si un estacionamiento esta en uso o no

    if(errores.length==0){
        let usuario={};
        estacionamiento = estacionamiento.toString();
        bodega=bodega.toString();
        rut = rut.substr(0,8)+rut.substr(9);
        usuario.rut=rut;
        usuario.nombre=nombre;
        usuario.password = pass;
        usuario.estacionamiento = estacionamiento;
        usuario.bodega = bodega;
        usuario.moroso=moroso;

        let resultado = await crearUsuario(usuario);
        Swal.fire("Usuario ingresado");
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        })
    }

});