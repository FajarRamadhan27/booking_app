<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\EventScheduleController;
use App\Http\Controllers\SeatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('seats', SeatController::class);
Route::get('event-schedules', EventScheduleController::class);

Route::post('book-seats', BookingController::class);
