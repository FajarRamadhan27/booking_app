<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'fullnane' => $this->fullname,
            'title' => $this->title,
            'email' => $this->email,
            'total_purchase' =>  $this->total_purchase,
            'notes' => $this->notes,
            'seats' => BookingSeatResource::collection($this->bookingSeats)
        ];
    }
}
