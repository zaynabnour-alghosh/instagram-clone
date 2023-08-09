<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Follow;
use App\Models\Account;
use App\Models\Post;


class UserController extends Controller
{
    public function follow(Request $request){
        $token = $request->token;
        $user_id = Auth::getPayload($token)->get('sub');
        $user = User::find($user_id);
        $following = User::where('username',$request->username)->first();        
        $following_id = $following->id;
        $already_followed = Follow::where("follower_id", $user_id)->where("following_id", $following_id)->first();    
        $following_account = Account ::where("user_id",$following_id)->first();
        $user_account = Account::where("user_id",$user_id)->first();
        if (!$already_followed) {
            $follow = new Follow;
            $follow->follower_id = $user_id;
            $follow->following_id = $following_id;
            $follow->save();            
            $user_account->increment('nb_followings');
            $following_account->increment('nb_followers');
            return response()->json([
                'status' => 'Successful follow',
                'user' => $user,
                'following' => $following,
                'message' => $user->username . ' is following ' . $following->username
            ]);
        } else {
            $already_followed->delete();
            $user_account->decrement('nb_followings');
            $following_account->decrement('nb_followers');
            return response()->json([
                'status' => 'Successful unfollow',
                'message' => $user->username . ' unfollowed ' . $following->username
            ]);
        }
        
    }

    public function viewFollowingPosts($username, Request $request){
        $token = $request->token;
        $user_id = Auth::getPayload($token)->get('sub');
        $user = User::find($user_id);
        $following = User::where('username',$username)->first();        
        $following_id = $following->id;
        $already_followed = Follow::where("follower_id", $user_id)->where("following_id", $following_id)->first();
        if ($already_followed) {
            // return response()->json(['status'=>'success']);
            $following_posts = $following-> Posts()->with("User")->get();
            return response()->json([
                "status" => "success", 
                "data" => $following_posts
            ]);
        }   
    }

    public function viewFollowingsPosts(Request $request)
    {
    $token = $request->token;
    $user_id = Auth::getPayload($token)->get('sub');
    $user = User::find($user_id);
    $followings = Follow::where('follower_id' ,$user_id)->pluck('following_id');
    if ($followings) {
        foreach ($followings as $fid) {
            $posts[] = Post::where('user_id', $fid)->with("User")->get();
        }
    }
    return response()->json(['posts' => $posts]);   
    }
}
