@extends('layouts.main')

@section('main')
  <article>
    <h2>{{ $post->title }}</h2>
    
    <p>By. <a href="#">{{ $post->user->name }}</a> in <a href="/categories/{{ $post->category->slug }}">{{ $post->category->name }}</a></p>
    
    {!! $post->body !!}

  </article>

  <a href="/blog">Back to Posts</a>
@endsection