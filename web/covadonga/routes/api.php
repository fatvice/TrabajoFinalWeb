<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeudasController;
use App\Http\Controllers\PagosController;
use App\Http\Controllers\ReclamosSugerenciasController;
use App\Http\Controllers\TrabajadoresController;
use App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//RUTAS DEUDAS


//RUTAS PAGOS


//RUTAS RECLAMOS Y SUGERENCIAS


//RUTAS TRABAJADORES
Route::get("trabajadores/get",[TrabajadoresController::class,"getTrabajadores"]);
Route::get("trabajadores/filtrarturno",[TrabajadoresController::class,"filtrarTrabajadoresTurno"]);
Route::get("trabajadores/getturnos",[TrabajadoresController::class,"getTurnos"]);
/*
Route::get("trabajadores/filtrartrabajo",[TrabajadoresController::class,"filtrarTrabajadoresTrabajo"]);
Route::get("trabajadores/filtrarcontrato",[TrabajadoresController::class,"filtrarTrabajadoresContrato"]);
*/
Route::post("trabajadores/post",[TrabajadoresController::class,"crearTrabajador"]);
Route::post("trabajadores/eliminar",[TrabajadoresController::class,"eliminarTrabajador"]);
Route::post("trabajadores/actualizar",[TrabajadoresController::class,"actualizarTrabajador"]);

//RUTAS USUARIOS
Route::get("usuarios/get",[UsuariosController::class,"getUsuarios"]);
Route::get("usuarios/filtrar",[UsuariosController::class,"filtrarUsuarios"]);
Route::post("usuarios/post",[UsuariosController::class,"crearusuario"]);
Route::post("usuarios/eliminar",[UsuariosController::class,"eliminarUsuario"]);
Route::post("usuarios/actualizar",[UsuariosController::class,"actualizarUsuario"]);