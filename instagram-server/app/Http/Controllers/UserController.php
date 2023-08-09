<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Follow;
use App\Models\Account;

class UserController extends Controller
{
    public function follow(Request $request){
        $token = $request->token;
        $user_id = Auth::getPayload($token)->get('sub');
        $user = User::find($user_id);
        $follower = User::where('username',$request->username)->first();        
        $follower_id = $follower->id;
        $already_followed = Follow::where("follower_id", $user_id)->where("following_id", $follower_id)->first();    
        $follower_account = Account ::where("user_id",$follower_id)->first();
        $user_account = Account::where("user_id",$user_id)->first();
        if (!$already_followed) {
            $follow = new Follow;
            $follow->follower_id = $user_id;
            $follow->following_id = $follower_id;
            $follow->save();            
            $user_account->increment('nb_followings');
            $follower_account->increment('nb_followers');
            return response()->json([
                'status' => 'Successful follow',
                'user' => $user,
                'follower' => $follower,
                'message' => $user->username . ' is following ' . $follower->username
            ]);
        } else {
            $already_followed->delete();
            $user_account->decrement('nb_followings');
            $follower_account->decrement('nb_followers');
            return response()->json([
                'status' => 'Successful unfollow',
                'message' => $user->username . ' unfollowed ' . $follower->username
            ]);
        }
        
    }
}
