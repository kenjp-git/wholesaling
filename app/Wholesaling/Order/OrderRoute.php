<?php
declare(strict_types=1);

namespace App\Wholesaling\Order;

use Illuminate\Support\Facades\Route;

Route::get('input', OrderInput::class)
    ->name('wholesaling.order.input');

Route::get('list', OrderList::class)
    ->name('wholesaling.order.list');