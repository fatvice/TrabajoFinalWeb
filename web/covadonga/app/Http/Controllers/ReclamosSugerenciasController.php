<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ReclamoSugerencia;

class ReclamosSugerenciasController extends Controller
{
    //
    public function getReclamosSugerencias(){
        return ReclamoSugerencia::all();
    }
    public function crearReclamoSugerencia(Request $request){
        $input = $request->all();
        $texto = $input["texto"];
        $tipo_info = $input["tipo_info"];
        $cod_usuario = $input["cod_usuario"];
        $reclamoSugerencia = new ReclamoSugerencia();
        $reclamoSugerencia->texto = $texto;
        $reclamoSugerencia->tipo_info = $tipo_info;
        $reclamoSugerencia->cod_usuario = $cod_usuario;
        $reclamoSugerencia->Save();
        return $reclamoSugerencia;
    }
    public function eliminarReclamoSugerencia(Request $request){
        $input = $request->all();
        $cod_info = $input["cod_info"];
        $reclamoSugerencia = ReclamoSugerencia::findOrFail($cod_info);
        $reclamoSugerencia->delete();
        return "ok";
    }
    public function actualizarReclamoSugerencia(Request $request){
        $input = $request->all();
        $cod_info = $input["cod_info"];
        $reclamoSugerencia = ReclamoSugerencia::findOrFail($cod_info);
        $texto = $input["texto"];
        $tipo_info = $input["tipo_info"];
        $cod_usuario = $input["cod_usuario"];
        $reclamoSugerencia->texto = $texto;
        $reclamoSugerencia->tipo_info = $tipo_info;
        $reclamoSugerencia->cod_usuario = $cod_usuario;
    }
}