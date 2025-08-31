<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    // public function authorize(): bool
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email,' . $this->client->id,
            'telephone' => 'nullable|string|max:20',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Por favor, ingrese un nombre.',
            'email.required' => 'Por favor, ingrese un correo electrónico.',
            'email.email' => 'El correo electrónico debe ser una dirección de correo electrónico válida.',
            'email.unique' => 'El correo electrónico ya está en uso.',
            'telephone.max' => 'El número de teléfono no puede tener más de :max caracteres.',
        ];
    }
}
