<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;
use App\Http\Resources\SeatResource;

class SeatController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $seats = Seat::where('facility_id', $request->facility_id)
            ->orderBy('id')
            ->get();

        return SeatResource::collection($seats);
    }
}
