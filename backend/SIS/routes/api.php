<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonnelController;
use App\Http\Controllers\ProductController;


//Route::get('/user', function (Request $request) {
 //   return $request->user();
//})->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
//Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);



/*Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->tokens()->delete();  // Delete all tokens for the user
    return response()->json(['success' => 'Logged out successfully']);
});*/


Route::apiResource('personnel', PersonnelController::class);
Route::apiResource('product', ProductController::class);