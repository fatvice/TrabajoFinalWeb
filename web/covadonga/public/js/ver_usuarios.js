const cargarMorosos = ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let option1=document.createElement("option");
    option1.innerText="No Morosos";
    option1.value="0";
    filtroCbx.appendChild(option1);
    let option2=document.createElement("option");
    option2.innerText="Morosos";
    option2.value="1";
    filtroCbx.appendChild(option2);
}

const iniciarEliminacion = async function(){
    let cod_usuario = this.cod_usuario;
    let resp = await Swal.fire({
        title:"Esta seguro?",
        text:"Esta acción es irreversible",
        icon:"error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarUsuario(cod_usuario)){
            let usuarios = await getUsuarios();
            cargarTabla(usuarios);
            Swal.fire("Usuario eliminado","Usuario eliminado correctamente","info");
            }
        else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado a peticion del usuario");
    }
}
/*const iniciarActualizacion=async function(){
    let cod_usuario=this.cod_usuario;
    window.location.href="registrar_usuario";
    let ingresoRut=document.querySelector("#rut-txt");
    ingresoRut.innerText=usuarios[cod_usuario].rut;
    ingresoRut.classList.add("disabled");
    let ingresoNombre=document.querySelector("#nombre-txt");
    ingresoNombre.innerText=usuarios[cod_usuario].nombre;
    ingresoNombre.classList.add("disabled");

}*/

const cargarTabla = (usuarios)=>{
    let tbody=document.querySelector("#tbody-usuario");
    tbody.innerHTML="";
    for(let i=0; i<usuarios.length;i++){
        let tr=document.createElement("tr");
        let tdRut=document.createElement("td");
        tdRut.innerText=usuarios[i].rut;
        let tdNombre=document.createElement("td");
        tdNombre.innerText=usuarios[i].nombre;
        let tdEstacionamiento = document.createElement("td");
        tdEstacionamiento.classList.add("text-center");
        tdEstacionamiento.innerText=usuarios[i].estacionamiento;
        let tdBodega=document.createElement("td");
        tdBodega.classList.add("text-center");
        tdBodega.innerText=usuarios[i].bodega;
        let tdMoroso=document.createElement("td");
        if (usuarios[i].moroso =="0"){
            tdMoroso.innerText="No Moroso";
        }else{
            tdMoroso.innerText="Moroso";
        }

        let tdAcciones = document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger","mx-2");
        botonEliminar.cod_usuario=usuarios[i].cod_usuario;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_usuario=usuarios[i].cod_usuario;
//        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);

        tr.appendChild(tdRut);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEstacionamiento);
        tr.appendChild(tdBodega);
        tr.appendChild(tdMoroso);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
}

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let usuarios = await getUsuarios(filtro);
    cargarTabla(usuarios);
})

document.addEventListener("DOMContentLoaded", async()=>{
    await cargarMorosos();
    let usuarios = await getUsuarios();
    cargarTabla(usuarios);
})