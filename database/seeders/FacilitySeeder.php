<?php

namespace Database\Seeders;

use App\Models\Facility;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $index = 0;
        $faclilities = [];

        do {
            $faclilities[$index] = [
                'id' => $index+1,
                'title' => 'STUDIO ' .($index+1),
                'type' => Facility::STUDIO
            ];

            $index++;
        } while ($index < 6);

        DB::table('facilities')->insert($faclilities);
    }
}
