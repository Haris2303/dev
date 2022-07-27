@extends('layouts.main')

@section('main')
    <h1 class="text-center">Halaman Blog</h1>

    @foreach ($posts as $post)
    <article class="mb-3">
      <h2>
        <a href="/posts/{{ $post['slug'] }}">{{ $post['title'] }}</a>
      </h2>
      <h4>{{ $post['author'] }}</h4>
      <p>{{ $post['body'] }}</p>
    </article>
    @endforeach
@endsection