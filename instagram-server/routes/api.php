<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


//Authenticated APIS
Route::group(["middleware" => "auth:api"], function(){
    $user = Auth::user();        

    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
    });

});

//Unauthenticated APIS
Route::group(["prefix" => "guest"], function(){
    
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
});


