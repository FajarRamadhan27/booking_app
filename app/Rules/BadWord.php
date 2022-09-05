<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class BadWord implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $words = array('badword', 'badword' , 'badword' , 'badword');
        $wordFound = false;

        $value = strtolower($value);

        foreach ($words as $badword) {
            if (str_contains($value, strtolower($badword))) {
                $wordFound = true;
                break;
            }
        }

        return $wordFound ? false : true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Bad word not allowed.';
    }
}
