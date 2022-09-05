<?php

namespace App\Helper;

use App\Http\Resources\BookingResource;
use App\Models\Booking;

class BookingService {

    public $fullname;
    public $email;
    public $notes;
    public $total_purchase;
    public $event_schedule_id;
    public $event_name;
    public $seat_ids;

    public function __construct(
        $fullname, $email, $notes, $total_purchase,
        $event_schedule_id, $event_name, $seat_ids
    ) {
        $this->fullname = $fullname;
        $this->email = $email;
        $this->notes = $notes;
        $this->total_purchase = $total_purchase;
        $this->event_schedule_id = $event_schedule_id;
        $this->event_name = $event_name;
        $this->seat_ids = $seat_ids;
    }

    public function create() {

        $booking = Booking::create(
            [
                'fullname' => $this->fullname,
                'email' => $this->email,
                'title' => $this->event_name
                    . ' (' . $this->fullname . ' : ' . $this->email . ')',
                'notes' => $this->notes,
                'total_purchase' => $this->total_purchase,
                'event_schedule_id' => $this->event_schedule_id
            ]
        );

        foreach ($this->seat_ids as $seat) {
            $booking->bookingSeats()->create(['seat_id' => $seat]);
        }

        return ['status' => true, 'data' => new BookingResource($booking)];
    }
}
