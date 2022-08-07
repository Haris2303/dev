@extends('layouts.main')

@section('main')
    <h1 class="text-center mb-5">Post Category : {{ $category }}</h1>

    @foreach ($posts as $post)
    <article class="mb-3">
      <h2>
        <a href="/posts/{{ $post->slug }}">{{ $post->title }}</a>
      </h2>
      <p>{{ $post->excerpt }}</p>
    </article>
    @endforeach
@endsection