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
        return Inertia::render('clients/Index', [
            'name' => 'Karoline',
        ]);
    }

    public function create()
    {
        return Inertia::render('clients/Create');
    }

    public function store(Request $request)
    {
        // Validate and create the client

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients|max:255',
            'telephone' => 'string|max:20',
        ]);

        Client::create($validated);

        return redirect()->route('client.list');
    }

    public function edit(Client $client)
    {
        return Inertia::render('clients/Edit', [
            'client' => $client,
        ]);
    }

    public function update(Request $request, Client $client)
    {
        // Validate and update the client

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email,' . $client->id,
            'telephone' => 'string|max:20',
        ]);

        $client->update($validated);

        return redirect()->route('client.list');
    }


    public function destroy(Client $client)
    {
        // Validate and delete the client
    }
}
