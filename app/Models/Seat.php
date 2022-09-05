<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;

    /**
     * Get all facility seats.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function facility()
    {
        return $this->belongsTo(Facility::class, 'facility_id');
    }


    /**
     * Get facility.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function bookingSeat()
    {
        return $this->hasOne(BookingSeat::class);
    }
}
