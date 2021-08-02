//Ingreso de datos de la información
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let usuario = document.querySelector("#usuario-select").value.trim();
    let tipoInfo = document.querySelector("#opcion-select").value.trim();
    let texto = document.querySelector("#texto-txt").value.trim();

    let info={};
    info.usuario=usuario;
    info.tipoInfo=tipoInfo;
    info.texto=texto;
    console.log(info);
    if(tipoInfo=="1"){
        Swal.fire("Reclamo registrado");
    }else{
        Swal.fire("Sugerencia registrada");
    }    
});
