@extends('layouts.main')

@section('main')
    <h1 class="text-center">Halaman Blog</h1>

    @foreach ($posts as $post)
    <article class="mb-3">
      <h2>
        <a href="/posts/{{ $post->slug }}">{{ $post->title }}</a>
      </h2>
      <p>By. <a href="/author/{{ $post->author->username }}">{{ $post->author->name }}</a> in <a href="/categories/{{ $post->category->slug }}">{{ $post->category->name }}</a></p>
      <p>{{ $post->excerpt }}</p>
    </article>
    @endforeach
@endsection