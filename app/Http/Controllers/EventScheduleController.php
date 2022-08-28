<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventScheduleResource;
use App\Models\EventSchedule;
use Illuminate\Http\Request;

class EventScheduleController extends Controller
{
    /**
     * Provision a new web server.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke()
    {
        return EventScheduleResource::collection(EventSchedule::all());
    }
}
