const iniciarEliminacionDeuda = async function(){
    let cod_deuda = this.cod_deuda;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarDeuda(cod_deuda)){
            let deudas = await getDeudas();
            cargarTablaDeudas(deudas);
            Swal.fire("Eliminado", "Se ha eliminado la deuda", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const iniciarEliminacionPago = async function(){
    let cod_pago = this.cod_pago;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarPago(cod_pago)){
            let pagos = await getPagos();
            cargarTablaPagos(pagos);
            Swal.fire("Eliminado", "Se ha eliminado el pago", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const cargarTablaDeudas = (deudas)=>{
    let tbody = document.querySelector("#tbody-pago-deuda");
    tbody.innerHTML = "";
    for(let i=0; i < deudas.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = deudas[i].cod_usuario;
        //let tdNombre = document.createElement("td");
        //tdNombre.innerText = deudas[i].;
        let tdMonto = document.createElement("td");
        tdMonto.innerText = ("$" + deudas[i].monto);
        let tdFecha = document.createElement("td");
        tdFecha.innerText = deudas[i].fecha_deuda;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_deuda = deudas[i].cod_deuda;
        botonEliminar.addEventListener("click", iniciarEliminacionDeuda);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdCod);
        //tr.appendChild(tdNombre);
        tr.appendChild(tdMonto);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
const cargarTablaPagos = (pagos)=>{
    let tbody = document.querySelector("#tbody-pago-deuda");
    tbody.innerHTML = "";
    for(let i=0; i < pagos.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = pagos[i].cod_usuario;
        //let tdNombre = document.createElement("td");
        //tdNombre.innerText = pagos[i].;
        let tdMonto = document.createElement("td");
        tdMonto.innerText = ("$" + pagos[i].monto);
        let tdFecha = document.createElement("td");
        tdFecha.innerText = pagos[i].fecha_pago;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_pago = pagos[i].cod_pago;
        botonEliminar.addEventListener("click", iniciarEliminacionPago);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdCod);
        //tr.appendChild(tdNombre);
        tr.appendChild(tdMonto);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    if(filtro == "deudas"){
        cargarTablaDeudas(deudas);
    }else{
        cargarTablaPagos(pagos);
    }

});
document.addEventListener("DOMContentLoaded", async ()=>{
    let deudas = await getDeudas();
    cargarTablaDeudas(deudas);
});