







const cargarTurnos = async()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let turnos = await getTurnos();
    turnos.forEach(t=>{
        let option=document.createElement("option");
        option.innerText=t;
        if (t=="Dia"){
            option.value="1";
        }if(t=="Tarde"){
            option.value="2";
        }if(t=="Noche"){
            option.value="3";
        }
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let cod_trabajador = this.cod_trabajador;
    let resp = await Swal.fire({
        title:"Esta seguro?",
        text:"Esta acción es irreversible",
        icon:"error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarTrabajador(cod_trabajador)){
            let trabajadores = await getTrabajadores();
            cargarTabla(trabajadores);
            Swal.fire("Trabajador eliminado","Trabajador eliminado correctamente","info");
            }
        else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado a peticion del usuario");
    }
};
/*const iniciarActualizacion=async function(){
    let cod_trabajador=this.cod_trabajador;
    window.location.href="registrar_usuario";
    let ingresoRut=document.querySelector("#rut-txt");
    ingresoRut.innerText=usuarios[cod_trabajador].rut;
    ingresoRut.classList.add("disabled");
    let ingresoNombre=document.querySelector("#nombre-txt");
    ingresoNombre.innerText=usuarios[cod_trabajador].nombre;
    ingresoNombre.classList.add("disabled");

}*/

const cargarTabla = (trabajadores)=>{
    let tbody=document.querySelector("#tbody-trabajador");
    tbody.innerHTML="";
    for(let i=0; i<trabajadores.length;i++){
        let tr=document.createElement("tr");
        let tdRut=document.createElement("td");
        tdRut.innerText=trabajadores[i].rut;
        let tdNombre=document.createElement("td");
        tdNombre.innerText=trabajadores[i].nom_persona;
        let tdTipoContrato = document.createElement("td");
        tdTipoContrato.classList.add("text-center");
        tdTipoContrato.innerText=trabajadores[i].tipo_contrato;
        let tdTrabajo=document.createElement("td");
        tdTrabajo.classList.add("text-center");
        tdTrabajo.innerText=trabajadores[i].nom_trabajo;
        let tdTurno=document.createElement("td");
        tdTurno.classList.add("text-center");
        tdTurno.innerText=trabajadores[i].turno;
        let tdAcciones = document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger","mx-2");
        botonEliminar.cod_trabajador=trabajadores[i].cod_trabajador;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_trabajador=trabajadores[i].cod_trabajador;
//        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdRut);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipoContrato);
        tr.appendChild(tdTrabajo);
        tr.appendChild(tdTurno);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let trabajadores = await getTrabajadores(filtro);
    cargarTabla(trabajadores);
});

document.addEventListener("DOMContentLoaded", async()=>{
    await cargarTurnos();
    let trabajadores = await getTrabajadores();
    cargarTabla(trabajadores);
});