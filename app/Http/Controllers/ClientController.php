<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $orderColumn = $request->input('ord_columna', 'id'); // Default sort column
        $orderDirection = $request->input('ord_direccion', 'asc'); // Default sort direction

        // Validate the requested column and direction to prevent SQL injection
        if (!in_array($orderColumn, ['id', 'name', 'email', 'telephone'])) {
            $orderColumn = 'id';
        }
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'asc';
        }

        $clients = Client::search($request)
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(perPage: 15);

        return Inertia::render('clients/Index', [
            'clients' => ClientResource::collection($clients),
            'search' => $request->search ?? '',
        ]);
    }

    public function create()
    {
        return Inertia::render('clients/Create');
    }

    public function store(StoreClientRequest $request)
    {
        // Validate and create the client

        $validated = $request->validated();

        Client::create($validated);

        return redirect()->route('client.list')->with('success', 'Se ha creado el cliente.');
    }

    public function edit(Client $client)
    {
        return Inertia::render('clients/Edit', [
            'client' => $client,
        ]);
    }

    public function update(UpdateClientRequest $request, Client $client)
    {
        // Validate and update the client

        $validated = $request->validated();

        $client->update($validated);

        return redirect()->route('client.list')->with('success', 'Se ha actualizado el cliente.');
    }


    public function destroy(Client $client)
    {
        // Validate and delete the client
        $client->delete();

        return redirect()->route('client.list')->with('success', 'Se ha eliminado el cliente.');
    }
}
