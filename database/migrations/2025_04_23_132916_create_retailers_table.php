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
        Schema::create('retailers', function (Blueprint $table) {
            $table->id('retailer_code')->comment('得意先コード');
            $table->string('retailer_name')->comment('得意先名');
            $table->string('retailer_name_kana')->comment('得意先名カナ');
            $table->string('department_name')->nullable()->comment('部署名');
            $table->string('retailer_address_1')->comment('都道府県名');
            $table->string('retailer_address_1_kana')->comment('都道府県名_カナ');
            $table->string('retailer_address_2')->comment('市区町村名');
            $table->string('retailer_address_2_kana')->nullable()->comment('市区町村名_カナ');
            $table->string('retailer_address_3')->comment('番地');
            $table->string('retailer_address_3_kana')->nullable()->comment('番地_カナ');
            $table->string('retailer_phone')->comment('得意先電話番号');
            $table->string('retailer_email')->nullable()->comment('得意先メールアドレス');
            $table->string('payment_method')->nullable()->comment('支払い方法');
            $table->string('closing_date')->nullable()->comment('締日');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('retailers');
    }
};
