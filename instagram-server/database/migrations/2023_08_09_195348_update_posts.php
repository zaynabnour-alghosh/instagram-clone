<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $t) {
            $t->text("caption")->nullable();
        });
        Schema::drop('unlikes');
        Schema::drop('unfollows');
    }

   
    public function down(): void
    {
        //
    }
};
