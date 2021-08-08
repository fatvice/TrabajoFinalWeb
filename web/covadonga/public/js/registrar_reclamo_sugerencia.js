//Ingreso de datos de la información
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let usuario = document.querySelector("#usuario-select").value.trim();
    let tipoInfo = document.querySelector("#opcion-select").value.trim();
    let texto = document.querySelector("#texto-txt").value.trim();
    let errores = [];

    if(texto.length == 0){
        errores.push("Debe ingresar texto");
    }

    if(errores.length == 0){
        let info={};
        info.usuario=usuario;
        info.tipoInfo=tipoInfo;
        info.texto=texto;
        let resultado = await crearReclamoSugerencia(info);
        if(tipoInfo=="1"){
            Swal.fire("Reclamo registrado");
        }else{
            Swal.fire("Sugerencia registrada");
        }
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        });
    }
});
