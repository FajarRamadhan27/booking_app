<?php

namespace Database\Seeders;

use App\Enums\EventTypeEnum;
use App\Models\Event;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $events = [
            0 => [
                'id' => 1,
                'title' => 'The Incredible Hulk',
                'description' => 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/the-incredible-hulk.jpg',
            ],
            1 => [
                'id' => 2,
                'title' => 'Thor: Ragnarok',
                'description' => 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/thor-ragnarok.jpg',
            ],
            2 => [
                'id' => 3,
                'title' => 'Doctor Strange',
                'description' => 'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/doctor-strange.jpg',
            ],
            3 => [
                'id' => 4,
                'title' => 'Avenger: Invinity War',
                'description' => 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/infinity-war.jpg',
            ],
            4 => [
                'id' => 5,
                'title' => 'Captain Marvel',
                'description' => 'Carol Danvers becomes one of the universe most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/captain-marvel.jpg',
            ],
            5 => [
                'id' => 6,
                'title' => 'Avenger: End Game',
                'description' => 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
                'type' => Event::CINEMA,
                'images' => '/images/poster/end-game.jpg',
            ]
        ];

        DB::table('events')->insert($events);
    }
}
