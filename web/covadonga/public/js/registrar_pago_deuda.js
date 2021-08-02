//Ingreso de datos de la información
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let usuario = document.querySelector("#usuario-select").value.trim();
    let tipoInfo = document.querySelector("#opcion-select").value.trim();
    let monto = +document.querySelector("#monto-txt").value;
    let fecha = document.querySelector("#fecha-txt").value;

    let info={};
    info.usuario=usuario;
    info.tipoInfo=tipoInfo;
    info.monto=monto;
    info.fecha=fecha;
    console.log(info);
    if(tipoInfo=="1"){
        Swal.fire("Pago registrado");
    }else{
        Swal.fire("Deuda registrada");
    }     
});