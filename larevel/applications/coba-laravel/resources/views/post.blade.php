@extends('layouts.main')

@section('main')
  <article>
    <h2>{{ $post->title }}</h2>
    <h5>{{ $post->author }}</h5>
    
    {!! $post->body !!}

  </article>

  <a href="/blog">Back to Posts</a>
@endsection