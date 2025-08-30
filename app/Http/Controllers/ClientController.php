<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'name' => 'Karoline',
        ]);
    }

    public function create()
    {
        return Inertia::render('Client/Create');
    }

    public function store(Request $request)
    {
        // Validate and create the client
    }

    public function edit(Client $client)
    {
        return Inertia::render('Client/Edit', [
            'client' => $client,
        ]);
    }

    public function update(Request $request, Client $client)
    {
        // Validate and update the client
    }


    public function destroy(Client $client)
    {
        // Validate and delete the client
    }
}
