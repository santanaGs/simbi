<?php

use App\Http\Controllers\Api\V1\ApiProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Rotas Públicas
|--------------------------------------------------------------------------
|
| Aqui estão as rotas públicas acessíveis sem autenticação.
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/*
|--------------------------------------------------------------------------
| Rotas da API
|--------------------------------------------------------------------------
|
| Aqui estão as rotas da API.
|
*/


Route::get("/projects", [ApiProjectController::class, 'index']);



Route::get("/projects/all", [ApiProjectController::class, 'getAll']);
