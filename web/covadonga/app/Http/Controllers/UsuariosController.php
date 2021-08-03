<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuariosController extends Controller
{
    //No se si esta funcion sea necesaria
    /*public function getEstacionamientos(){
        $estacionamientos=array();
        for (i=0;i<55;i++){
            $estacionamientos[]=i;
        }
        return $estacionamientos;
    }*/

    public function getUsuarios(){
        $usuarios = Usuario::all();
        return $usuarios;
    }

    public function crearUsuario(Request $request){
        $input=$request->all();
        $usuario=new Usuario();
        $usuario->nombre=$input["nombre"];
        $usuario->rut=$input["rut"];
        $usuario->password=$input["password"];
        $usuario->estacionamiento=$input["estacionamiento"];
        $usuario->bodega=$input["bodega"];
        $usuario->moroso=$input["moroso"];
        $usuario->save();
        return $usuario;
    }

    public function eliminarUsuario(Request $request){
        $input = $request->all();
        $cod_usuario =$input["cod_usuario"];
        $usuario=Usuario::findOrFail($cod_usuario);
        $usuario->delete();
        return"ok";
    }

    public function actualizarUsuario(Request $request){
        $input=$request->all();
        $cod_usuario=$input["cod_usuario"];
        $usuario=Usuario::findOrFail($cod_usuario);        
        $usuario->nombre=$input["nombre"];
        $usuario->rut=$input["rut"];
        $usuario->password=$input["password"];
        $usuario->estacionamiento=$input["estacionamiento"];
        $usuario->bodega=$input["bodega"];
        $usuario->moroso=$input["moroso"];
    }

    public function filtrarUsuarios(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $usuarios=Usuarios::where("moroso", "=",$filtro)->get();
        return $usuarios;
    }
}