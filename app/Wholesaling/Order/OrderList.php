<?php
declare(strict_types=1);

namespace App\Wholesaling\Order;

use Inertia\Inertia;

class OrderList
{
    public function __invoke()
    {
        return Inertia::render('Order/OrderList');
    }
}