<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Client extends Model
{
    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory;

    protected $fillable = ['name', 'email', 'telephone'];

    public function scopeSearch(Builder $query, Request $request)
    {
        return $query->when(
            $request->input('busqueda'),
            function ($query) use ($request) {
                return $query
                    ->whereAny(
                        ['name', 'email', 'telephone', 'created_at'],
                        'like',
                        "%{$request->input('busqueda')}%"
                    );
            }
        );
    }
}