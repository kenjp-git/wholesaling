<?php

declare(strict_types = 1);

namespace App\Wholesaling\Utils;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});