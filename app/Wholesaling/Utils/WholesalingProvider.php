<?php

declare(strict_types = 1);

namespace App\Wholesaling\Utils;

use Illuminate\support\ServiceProvider;

class WholesalingProvider extends ServiceProvider {
    protected $app_route = 'app/Wholesaling/Utils/MainRoute.php';

    public function boot() {
        $this->loadRoutesFrom(base_path($this->app_route));
    }   
}