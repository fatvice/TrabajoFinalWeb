//Ingreso de datos de trabajador
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let turno = document.querySelector("#turno-select").value;
    let trabajo = document.querySelector("#trabajo-select").value;
    let contrato = document.querySelector("#contrato-select").value;
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

    if (errores.length==0){
        let trabajador={};
        rut = rut.substr(0,8)+rut.substr(9);
        trabajador.rut=rut;
        trabajador.nom_persona=nombre;
        trabajador.turno=turno;
        trabajador.nom_trabajo=trabajo;
        trabajador.tipo_contrato=contrato;
        let resultado = await crearTrabajador(trabajador);
        Swal.fire("Trabajador registrado");
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        })
    }
});