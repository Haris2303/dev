<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController
{
    public function index()
    {
        return view('posts', [
            "title" => "Blog",
            "posts" => Post::getData()
        ]);
    }

    public function show($slug)
    {
        return view('post', [
            "title" => "Single Post",
            "post" => Post::getSingleData($slug)
        ]);
    }
}
