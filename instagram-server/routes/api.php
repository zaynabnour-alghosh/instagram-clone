<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

//Authenticated APIS
Route::group(["middleware" => "auth:api"], function(){
    $user = Auth::user();        

    Route::group(["prefix" => "user"], function(){
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("follow", [UserController::class, "follow"]);
        Route::get("posts/{following_username}", [UserController::class, "viewFollowingPosts"]);
        Route::post("posts", [UserController::class, "viewFollowingsPosts"]);
        Route::get("myPosts", [UserController::class, "viewMyPosts"]);
        Route::post("users", [UserController::class, "searchUsers"]); 
    });

});

//Unauthenticated APIS
Route::group(["prefix" => "guest"], function(){
    
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
});


