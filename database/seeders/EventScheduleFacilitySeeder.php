<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventScheduleFacilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $index = 0;
        $eventSchduleFacilities = [];

        do {
            $eventSchduleFacilities[$index] = [
                'id' => $index+1,
                'event_schedule_id' => $index+1,
                'facility_id' => $index+1
            ];

            $index++;
        } while ($index < 6);

        DB::table('event_schedule_facilities')->insert($eventSchduleFacilities);
    }
}
