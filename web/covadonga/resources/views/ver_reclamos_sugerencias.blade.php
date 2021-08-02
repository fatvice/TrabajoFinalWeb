@extends('layouts.master')

@section('contenido')
<div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <select class="form-select" id="filtro-cbx">
                    <option value="reclamos">Reclamos</option>
                </select>
            </div>
        </div>
    </div>
</div>

<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>Rut</td>
                    <td>Nombre</td>
                    <td>Texto</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-reclamo-sugerencia">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section('javascript')
@endsection