<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home', [
        "title" => "Home"
    ]);
});

Route::get('/about', function () {
    return view('about', [
        "title" => "About",
        "name" => "Haris",
        "email" => "haris@gmail.com"
    ]);
});

Route::get('/blog', function () {

    $blog_posts = [
        [
            "title" => "Judul Post 1",
            "slug" => "judul-post-pertama",
            "author" => "Ucup Surucup",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ],
        [
            "title" => "Judul Post 2",
            "slug" => "judul-post-kedua",
            "author" => "Otong Surotong",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ]
    ];

    return view('posts', [
        "title" => "Blog",
        "posts" => $blog_posts
    ]);
});


// halaman single post
Route::get('posts/{slug}', function ($slug) {

    $blog_posts = [
        [
            "title" => "Judul Post 1",
            "slug" => "judul-post-pertama",
            "author" => "Ucup Surucup",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ],
        [
            "title" => "Judul Post 2",
            "slug" => "judul-post-kedua",
            "author" => "Otong Surotong",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ]
    ];

    $new_post = [];
    foreach ($blog_posts as $post) {
        if ($post['slug'] === $slug) {
            $new_post = $post;
        }
    }

    return view('post', [
        "title" => "Single Post",
        "post" => $new_post
    ]);
});
