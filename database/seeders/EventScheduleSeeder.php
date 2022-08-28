<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $eventShedules = [
            0 => [
                'id' => 1,
                'event_id' => 1,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
            1 => [
                'id' => 2,
                'event_id' => 2,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
            2 => [
                'id' => 3,
                'event_id' => 3,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
            3 => [
                'id' => 4,
                'event_id' => 4,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
            4 => [
                'id' => 5,
                'event_id' => 5,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
            4 => [
                'id' => 6,
                'event_id' => 6,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ],
        ];

        DB::table('event_schedules')->insert($eventShedules);
    }
}
