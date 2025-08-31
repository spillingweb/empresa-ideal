<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('d.m.Y'),
            'updated_at' => $this->updated_at->format('d.m.Y'),
            'name' => $this->name,
            'email' => $this->email,
            'telephone' => $this->telephone,    
        ];
    }
}
