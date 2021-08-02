@extends('layouts.master')

@section('contenido')
<h1>Home</h1>
@endsection
<!--Esto define el contenido de la seccion javascript del master -->
@section("javascript")  
    <script src="{{asset('js/home.js')}}"></script>
@endsection