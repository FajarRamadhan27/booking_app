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
        $index = 0;
        $eventShedules = [];

        do {
            $eventShedules[$index] = [
                'id' => $index+1,
                'event_id' => $index+1,
                'start_dt' => Carbon::now(),
                'end_dt' => Carbon::now()
            ];

            $index++;
        } while ($index < 6);

        DB::table('event_schedules')->insert($eventShedules);
    }
}
