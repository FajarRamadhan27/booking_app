<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class BookingTest extends TestCase
{
    use RefreshDatabase, DatabaseMigrations;

    /**
     * Setup
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    /**
     * Check if aster data exist in database
     *
     * @return void
     */
    public function test_assert_dabase_not_empty()
    {
        $this->assertDatabaseCount('seats', 180);
        $this->assertDatabaseCount('events', 6);
        $this->assertDatabaseCount('event_schedules', 6);
        $this->assertDatabaseCount('facilities', 6);
    }

    /**
     * User should input correct mail pattern
     *
     * @return void
     */
    public function test_user_should_insert_correct_email_when_create_a_booking()
    {
        $response = $this->post(
            'api/book-seats',
            $this->defaultBookingPayload(['email' => 'incorrect mail'])
        );

        $response->assertSessionHasErrors(
            ['email' => 'The email must be a valid email address.']
        );

        $this->assertDatabaseCount('bookings', 0);
        $this->assertDatabaseCount('booking_seats', 0);
    }

    /**
     * User should input correct mail pattern
     *
     * @return void
     */
    public function test_user_should_not_use_disposable_main_when_create_a_booking()
    {
        $response = $this->post(
            'api/book-seats',
            $this->defaultBookingPayload(['email' => 'fajar220@malinator.com'])
        );

        $response->assertSessionHasErrors(
            ['email' => 'Unable to use disposable email.']
        );

        $this->assertDatabaseCount('bookings', 0);
        $this->assertDatabaseCount('booking_seats', 0);
    }

    /**
     * User should input correct mail pattern
     *
     * @return void
     */
    public function test_user_unable_to_use_a_badword_when_make_a_booking()
    {
        $response = $this->post(
            'api/book-seats',
            $this->defaultBookingPayload(['notes' => 'badword'])
        );

        $response->assertSessionHasErrors(
            ['notes' => 'Bad word not allowed.']
        );

        $this->assertDatabaseCount('bookings', 0);
        $this->assertDatabaseCount('booking_seats', 0);
    }

    /**
     * User should input correct mail pattern
     *
     * @return void
     */
    public function test_user_unable_to_use_a_badword_when_make_a_booking_at_any_string_case()
    {
        $response = $this->post(
            'api/book-seats',
            $this->defaultBookingPayload(['notes' => 'BaDwOrD'])
        );

        $response->assertSessionHasErrors(
            ['notes' => 'Bad word not allowed.']
        );

        $this->assertDatabaseCount('bookings', 0);
        $this->assertDatabaseCount('booking_seats', 0);
    }

    /**
     * User able to make a booking with correct information
     *
     * @return void
     */
    public function test_user_able_to_make_a_booking_with_correct_information()
    {
        $response = $this->post('api/book-seats', $this->defaultBookingPayload());

        $response->assertStatus(200);

        $this->assertDatabaseCount('bookings', 1);
        $this->assertDatabaseCount('booking_seats', 2);
        $this->assertDatabaseHas(
            'bookings',
            [
                'fullname' => 'Fajar Ramadhan',
                'email' => 'fajarramadhan220@gmail.com',
                'notes' => 'booking app',
                'event_schedule_id' => 1,
                'total_purchase' => 100
            ]
        );
    }

    /**
     * Get default booking payload
     *
     * @param $overrirdes array
     *
     * @return array
     */
    protected function defaultBookingPayload($overrirdes = [])
    {
        return array_merge(
            [
                'name'  => 'Fajar Ramadhan',
                'email' => 'fajarramadhan220@gmail.com',
                'notes' => 'booking app',
                'event_schedule_id' => 1,
                'event_name' => 'The Incredible Hulk',
                'total_purchase' => 100,
                'seat_ids' => [1,2],
            ], $overrirdes
        );
    }
}
