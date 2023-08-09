<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\Follow;
use App\Models\User;
class CheckPostsVisibility
{
    
    public function handle(Request $request, Closure $next): Response {
        $user = Auth::user();
        $following = User::where('username', $request->username)->first();
        $following_id = $following->id;
        $already_followed = Follow::where("follower_id", $user->id)->where("following_id", $following_id)->first();
        
        if (!$already_followed) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        return $next($request);
    }

  
}
