<?php

use App\Http\Controllers\Api\V1\ApiProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/projects", [ApiProjectController::class, 'index']);
Route::get("/projects/all", [ApiProjectController::class, 'getAll']);
