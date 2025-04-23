<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_code')->comment('商品コード');
            $table->string('product_name')->comment('商品名');
            $table->string('product_specification')->nullable()->comment('商品規格');
            $table->string('unit')->comment('単位');
            $table->unsignedInteger('wholesaling_price')->comment('卸売価格');
            $table->unsignedBigInteger('gtin_code')->unique()->comment('JAN/GTINコード');
            $table->unsignedInteger('supplier_code')->comment('仕入先コード');
            $table->foreign('supplier_code')->references('supplier_code')->on('suppliers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
