//Ingreso de datos de la información
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let usuario = document.querySelector("#usuario-select").value.trim();
    let tipoInfo = document.querySelector("#opcion-select").value.trim();
    let monto = +document.querySelector("#monto-txt").value;
    let fecha = document.querySelector("#fecha-txt").value;
    let errores = [];

    if(monto <= 0){
        errores.push("El monto ingresado debe ser mayor a 0");
    }
    if(fecha == ""){
        errores.push("Debe ingresar una fecha");
    }

    if(errores.length == 0){
        let info={};
        info.usuario=usuario;
        info.tipoInfo=tipoInfo;
        info.monto=monto;
        info.fecha=fecha;
        if(tipoInfo=="1"){
            let resultado = await crearPago(info);
            Swal.fire("Pago registrado");
        }else{
            let resultado = await crearDeuda(info);
            Swal.fire("Deuda registrada");
        }
    }else{
        Swal.fire({
            title:"Errores de validación",
            icon:"warning",
            html:errores.join("<br />")
        });
    }
});