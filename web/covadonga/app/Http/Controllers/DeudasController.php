<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Deuda;
class DeudasController extends Controller
{
    //
    public function getDeudas(){
        return Deuda::all();
    }
    public function crearDeuda(Request $request){
        $input = $request->all();
        $monto = $input["monto"];
        $fecha_deuda = $input["fecha_deuda"];
        $cod_usuario = $input["cod_usuario"];
        $deuda = new Deuda();
        $deuda->monto = $monto;
        $deuda->fecha_deuda = $fecha_deuda;
        $deuda->cod_usuario = $cod_usuario;
        $deuda->Save();
        return $deuda;
    }
    public function eliminarDeuda(Request $request){
        $input = $request->all();
        $cod_deuda = $input["cod_deuda"];
        $deuda = Deuda::findOrFail($cod_deuda);
        $deuda->delete();
        return "ok";
    }
    public function actualizarDeuda(Request $request){
        $input = $request->all();
        $cod_deuda = $input["cod_deuda"];
        $deuda = Deuda::findOrFail($cod_deuda);
        $monto = $input["monto"];
        $fecha_deuda = $input["fecha_deuda"];
        $cod_usuario = $input["cod_usuario"];
        $deuda->monto = $monto;
        $deuda->fecha_deuda = $fecha_deuda;
        $deuda->cod_usuario = $cod_usuario;
    }
}
