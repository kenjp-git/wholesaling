<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // if (! app()->environment(['production'])) {
        //     return ;
        // }
        $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            if(in_array($response->getStatusCode(), [403, 404, 500, 503])) {
                return Inertia::render('Error', [
                    'status' => $response->getStatusCode(),
                    'message' => __("http.{$response->getStatusCode()}")
                ])
                    ->toResponse($request)
                    ->setStatusCode($response->getStatusCode());
            } else if ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' =>  __('http.token_expired')
                ]);
            }
        });
    })->create();
