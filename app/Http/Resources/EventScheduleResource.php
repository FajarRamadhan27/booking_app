<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventScheduleResource extends JsonResource
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
            'id' => $this->id,
            'event_id' => $this->event_id,
            'title' => $this->event->title,
            'description' => $this->event->description,
            'facility_id' => $this->facility->facility_id,
            'images' => $this->event->images,
        ];
    }
}
