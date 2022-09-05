<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingSeat extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'booking_id', 'seat_id'];

    /**
     * Get event.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}
