<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventSchedule extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'event_id', 'start_dt', 'end_dt'];

    /**
     * Get event.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    /**
     * Get facility.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function facility()
    {
        return $this->hasOne(EventScheduleFacility::class);
    }
}
