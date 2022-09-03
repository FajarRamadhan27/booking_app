<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeatSeeder extends Seeder
{
    private $_seats = [];
    private $_times = 0;
    private $_seatPerRow = 6;
    private $_seatIndexRow = 1;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $studioIndex = 0;

        do {
            $this->_creaeteSeeatForEachStudio($studioIndex);
            $studioIndex++;
        } while ($studioIndex < 6);

        DB::table('seats')->insert($this->_seats);
    }

    /**
     * Create seat for each studio
     *
     * @param $studioIndex int
     *
     * @return void
     */
    private function _creaeteSeeatForEachStudio(int $studioIndex)
    {
        $seatIndex = 0;

        do {
            $this->_seats[$this->_times] = [
                'title' => $this->_getSeatLabel($seatIndex),
                'facility_id' => $studioIndex+1,
                'price' => 50,
            ];

            $seatIndex++;
            $this->_times++;
        } while ($seatIndex < 30);
    }

    /**
     * Get seat label
     *
     * @param $seatIndex int
     *
     * @return String
     */
    private function _getSeatLabel(int $seatIndex)
    {
        $diff = $seatIndex/$this->_seatPerRow;
        $label = "";

        switch(true) {
        case ($diff<1):
            $label = 'A'.$this->_seatIndexRow;
            break;
        case ($diff >= 1 && $diff <2):
            $label = 'B'.$this->_seatIndexRow;
            break;
        case ($diff >= 2 && $diff <3):
            $label = 'C'.$this->_seatIndexRow;
            break;
        case ($diff >= 3 && $diff <4):
            $label = 'D'.$this->_seatIndexRow;
            break;
        case ($diff >=4 && $diff <5):
            $label = 'E'.$this->_seatIndexRow;
            break;
        }

        $this->_seatIndexRow = $this->_seatIndexRow == $this->_seatPerRow ?
            1 : $this->_seatIndexRow + 1;

        return $label;
    }
}
