<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Category;
use \App\Models\User;
use \App\Models\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // User::create([
        //     "name" => "Otong",
        //     "email" => "otong@gmail.com",
        //     "password" => bcrypt('12345')
        // ]);

        // User::create([
        //     "name" => "Ucup",
        //     "email" => "ucup@gmail.com",
        //     "password" => bcrypt('12345')
        // ]);

        User::factory(3)->create();

        Category::create([
            "name" => "Makanan",
            "slug" => "makanan"
        ]);

        Category::create([
            "name" => "Pemrograman",
            "slug" => "pemrograman"
        ]);

        Post::factory(20)->create();

        // Post::create([
        //     "title" => "Membuat Jalangkote",
        //     "slug" => "membuat-jalangkote",
        //     "excerpt" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti",
        //     "body" => " <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti repellat dolorem hic nostrum voluptas quam. Eaque, voluptatem quos explicabo non illum exercitationem placeat. Adipisci earum voluptates eos accusantium quae magni, sint alias deserunt dignissimos.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati nulla dolores dolore expedita ullam porro ab enim, fugiat reiciendis unde ipsa doloribus illo! Praesentium magnam ipsa veritatis placeat eveniet!</p>",
        //     "category_id" => 1,
        //     "user_id" => 1
        // ]);

        // Post::create([
        //     "title" => "Membuat Onde-onde",
        //     "slug" => "membuat-onde-onde",
        //     "excerpt" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti",
        //     "body" => " <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti repellat dolorem hic nostrum voluptas quam. Eaque, voluptatem quos explicabo non illum exercitationem placeat. Adipisci earum voluptates eos accusantium quae magni, sint alias deserunt dignissimos.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati nulla dolores dolore expedita ullam porro ab enim, fugiat reiciendis unde ipsa doloribus illo! Praesentium magnam ipsa veritatis placeat eveniet!</p>",
        //     "category_id" => 1,
        //     "user_id" => 1
        // ]);

        // Post::create([
        //     "title" => "Pemrograman Dasar Dengan C#",
        //     "slug" => "pemrograman-dasar-dengan-c#",
        //     "excerpt" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti",
        //     "body" => " <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quas nulla atque, culpa minima aspernatur nesciunt laudantium ad quibusdam id adipisci dignissimos laboriosam nisi deleniti repellat dolorem hic nostrum voluptas quam. Eaque, voluptatem quos explicabo non illum exercitationem placeat. Adipisci earum voluptates eos accusantium quae magni, sint alias deserunt dignissimos.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati nulla dolores dolore expedita ullam porro ab enim, fugiat reiciendis unde ipsa doloribus illo! Praesentium magnam ipsa veritatis placeat eveniet!</p>",
        //     "category_id" => 2,
        //     "user_id" => 2
        // ]);
    }
}
