<?php

declare(strict_types = 1);

namespace App\Wholesaling\Utils;

use Illuminate\support\ServiceProvider;
use Inertia\Inertia;

class WholesalingProvider extends ServiceProvider {
    protected $app_route = 'app/Wholesaling/Utils/MainRoute.php';

    protected $locale;

    public function register() {
        $this->loadRoutesFrom(base_path($this->app_route));
    }

    public function boot() {
        $this->load_words();
    }
    
    protected function load_words() {
        $this->locale = app()->getLocale();
        
        $translations  = [];
    
        $lang_path = resource_path('lang/' . $this->locale);
    
        if(is_dir($lang_path)) {
            $translations = $this->loadTranslationsFromDirectory($lang_path);
        }

        Inertia::share([
            'translations' => $translations,
        ]);
        
    }

    private function loadTranslationsFromDirectory($directory) {
        $translations = [];

        foreach(glob($directory . '/words.php') as $file) {
            $filename = basename($file, '.php');
            $translations[$filename] = include $file;
        }

        return $translations;
    }

}