@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Registrar Usuario</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="rut-txt" class="form-label">Rut con guión</label>
                    <input type="text" id="rut-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="pass-txt" class="form-label">Contraseña</label>
                    <input type="text" id="pass-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="estacionamiento-txt" class="form-label">Estacionamiento</label>
                    <input type="number" id="estacionamiento-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="bodega-txt" class="form-label">Bodega</label>
                    <input type="text" id="bodega-txt" class="form-control">
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection
<!--Esto define el contenido de la seccion javascript del master -->
@section("javascript")
    <script src="{{asset('js/registrar_usuario.js')}}"></script>
<!--
    <script src="{asset('js/servicios/marcasService.js')}}"></script>
-->
@endsection