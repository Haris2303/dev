<?php

namespace App\Models;

class Post
{
    // property 
    private static $data = [
        [
            "title" => "Judul Post Pertama",
            "slug" => "judul-post-pertama",
            "author" => "Ucup Surucup",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ],
        [
            "title" => "Judul Post Kedua",
            "slug" => "judul-post-kedua",
            "author" => "Otong Surotong",
            "body" => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet voluptatem delectus placeat debitis ullam doloribus harum. Perferendis autem, recusandae ipsa, nisi rem eligendi illo ab tenetur laboriosam, distinctio dignissimos earum perspiciatis accusantium blanditiis modi consequatur hic doloribus voluptatibus iusto ratione quos quo fugiat voluptates sed! Ratione officiis neque assumenda voluptates at sint accusamus optio! Et eum esse nisi tempore accusamus. Sit perspiciatis autem assumenda expedita exercitationem voluptate natus perferendis enim placeat a consequuntur, soluta aperiam quas rerum architecto voluptates."
        ]
    ];

    public static function getData()
    {
        return self::$data;
    }

    public static function getSingleData($slug)
    {
        $posts = static::getData();
        // $post = [];
        // foreach ($posts as $p) {
        //     if ($p['slug'] === $slug) {
        //         $post = $p;
        //     }
        // }
        return collect($posts)->firstWhere('slug', $slug);
    }
}
