<?php

namespace App\Http\Requests;

use App\Rules\BadWord;
use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:100'],
            'email' => ['required', 'email', 'indisposable'],
            'notes' => ['max:200', new BadWord],
            'event_schedule_id' => ['required', 'integer'],
            'event_name' => ['required'],
            'total_purchase' => ['required', 'integer'],
            'seat_ids' => ['required'],
            'seat_ids.*' => ['integer']
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.indisposable' => 'Unable to use disposable email.',
        ];
    }
}
