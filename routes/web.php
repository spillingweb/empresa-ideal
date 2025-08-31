<?php

use App\Http\Controllers\ClientController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');

Route::get('/clientes', [ClientController::class, 'index'])->name('client.list');

Route::get('/clientes/crear', [ClientController::class, 'create'])->name('client.create');
Route::post('/clientes', [ClientController::class, 'store'])->name('client.store')
    ->middleware([HandlePrecognitiveRequests::class]);

Route::get('/clientes/{client}/editar', [ClientController::class, 'edit'])->name('client.edit');
Route::put('/clientes/{client}', [ClientController::class, 'update'])->name('client.update')
    ->middleware([HandlePrecognitiveRequests::class]);

Route::delete('/clientes/{client}', [ClientController::class, 'destroy'])->name('client.destroy');