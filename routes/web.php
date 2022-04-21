<?php

use Illuminate\Support\Facades\Route;

// root
Route::get('/', function () {
    return view('home.index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
