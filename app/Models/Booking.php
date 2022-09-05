<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fullname',
        'title',
        'total_purchase',
        'email',
        'notes',
        'event_schedule_id'
    ];

    /**
     * Get all facility seats.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bookingSeats()
    {
        return $this->hasMany(BookingSeat::class);
    }
}
