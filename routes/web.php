<?php

use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Karoline',
    ]);
})->name('home');

Route::get('/clientes', [ClientController::class, 'index'])->name('client.list');

Route::get('/clientes/crear', [ClientController::class, 'create'])->name('client.create');
Route::post('/clientes', [ClientController::class, 'store'])->name('client.store');

Route::get('/clientes/{client}/editar', [ClientController::class, 'edit'])->name('client.edit');
Route::put('/clientes/{client}', [ClientController::class, 'update'])->name('client.update');

Route::delete('/clientes/{client}', [ClientController::class, 'destroy'])->name('client.destroy');