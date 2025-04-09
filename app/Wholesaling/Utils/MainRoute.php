<?php

declare(strict_types = 1);

namespace App\Wholesaling\Utils;

use Illuminate\Support\Facades\Route;

$base_path = 'app/Wholesaling/';
$ns = 'App\Wholesaling';

Route::group([], base_path($base_path.'Utils/WebRoute.php'));

Route::group([
    'prefix' => 'order',
], base_path($base_path.'Order/OrderRoute.php'));

Route::group([], base_path('routes/auth.php'));
