<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventScheduleFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_schedule_facilities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_schedule_id')->constrained('event_schedules');
            $table->foreignId('facility_id')->constrained('facilities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_schedule_facilities');
    }
}
