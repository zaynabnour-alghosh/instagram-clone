<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->text('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->text('image_url')->nullable();
            $table->text('bio')->nullable();
            $table->integer('nb_followers');
            $table->integer('nb_followings');
            $table->integer('nb_posts');
            $table->timestamps();
        });

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->text('image_url')->nullable();           
            $table->integer('nb_likes');
            $table->timestamps();
        });

        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('post_id');           
            $table->timestamps();
        });

        Schema::create('unlikes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('post_id');           
            $table->timestamps();
        });

        Schema::create('follows', function (Blueprint $table) {
            $table->id();
            $table->integer('follower_id');
            $table->integer('following_id');           
            $table->timestamps();
        });

        Schema::create('unfollows', function (Blueprint $table) {
            $table->id();
            $table->integer('unfollower_id');
            $table->integer('unfollowing_id');           
            $table->timestamps();
        });

    }

  
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
