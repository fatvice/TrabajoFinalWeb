const crearTrabajador=async(trabajador)=>{
    let resp=await axios.post("api/trabajadores/post",trabajador,{
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};

const eliminarTrabajador=async(cod_trabajador)=>{
    try{
        let resp = await axios.post("api/trabajadores/eliminar",{cod_trabajador},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
};

const actualizarTrabajador=async(cod_trabajador)=>{
    try{
        let resp = await axios.post("api/trabajadores/actualizar",{cod_trabajador},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
};

//TODO: ver como filtrar por contrato, horario o trabajo
const getTrabajadores=async(filtro="todos")=>{
    let resp;
    if (filtro=="todos"){
        resp=await axios.get("api/trabajadores/get");
    }else{
        resp= await axios.get(`api/trabajadores/filtrarturno?filtro=${filtro}`)
    }
    return resp.data;
}