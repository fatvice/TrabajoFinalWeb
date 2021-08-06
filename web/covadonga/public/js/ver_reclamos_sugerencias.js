const cargarTipos = ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let option1 = document.createElement("option");
    option1.innerText = "Reclamo";
    option1.value = "0";
    let option2 = document.createElement("option");
    option2.innerText = "Sugerencia";
    option2.value = "1";
    filtroCbx.appendChild(option1);
    filtroCbx.appendChild(option2);
};
const iniciarEliminacion = async function(){
    let cod_info = this.cod_info;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarReclamoSugerencia(cod_info)){
            let reclamosSugerencias = await getReclamosSugerencias();
            cargarTabla(reclamosSugerencias);
            Swal.fire("Eliminado", "Se ha eliminado el reclamo/sugerencia", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const cargarTabla = (reclamosSugerencias)=>{
    let tbody = document.querySelector("#tbody-reclamo-sugerencia");
    tbody.innerHTML = "";
    for(let i=0; i < reclamosSugerencias.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = reclamosSugerencias[i].cod_usuario;
        //let tdNombre = document.createElement("td");
        //tdNombre.innerText = reclamosSugerencias[i].;
        let tdTexto = document.createElement("td");
        tdTexto.innerText = reclamosSugerencias[i].texto;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_info = reclamosSugerencias[i].cod_info;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdCod);
        //tr.appendChild(tdNombre);
        tr.appendChild(tdTexto);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let reclamosSugerencias = await getReclamosSugerencias(filtro);
    cargarTabla(reclamosSugerencias);
});
document.addEventListener("DOMContentLoaded", async ()=>{
    let reclamosSugerencias = await getReclamosSugerencias();
    cargarTabla(reclamosSugerencias);
});