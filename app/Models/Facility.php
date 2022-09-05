<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    public const STUDIO = 'STUDIO';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'title', 'type'];

    /**
     * Get event schedule.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function schedules()
    {
        return $this->hasOne(EventScheduleFacility::class);
    }

    /**
     * Get all facility seats.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function seats()
    {
        return $this->hasMany(Seat::class);
    }
}
