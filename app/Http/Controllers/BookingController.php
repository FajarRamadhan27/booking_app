<?php

namespace App\Http\Controllers;

use App\Helper\BookingService;
use App\Http\Requests\BookingRequest;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(BookingRequest $request)
    {
        $response = (
            new BookingService(
                $request->name,
                $request->email,
                $request->notes,
                $request->total_purchase,
                $request->event_schedule_id,
                $request->event_name,
                $request->seat_ids
            )
        )->create();

        return response()->json($response);
    }
}
