<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventScheduleFacility extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'event_schedule_id', 'facility_id'];

    /**
     * Get schedule facility.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }

    /**
     * Get facility schedule.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function eventSchedule()
    {
        return $this->belongsTo(EventSchedule::class);
    }
}
