//Ingreso de datos de usuario
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let turno = document.querySelector("#turno-select").value.trim();
    let trabajo = document.querySelector("#trabajo-select").value.trim();
    let contrato = document.querySelector("#contrato-select").value.trim();

    let trabajador={};
    trabajador.rut=rut;
    trabajador.nombre=nombre;
    trabajador.turno=turno;
    trabajador.trabajo=trabajo;
    trabajador.contrato=contrato;
    console.log(trabajador);
    Swal.fire("Trabajador registrado");
});

