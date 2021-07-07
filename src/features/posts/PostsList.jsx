import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {PostAuthor} from './PostAuthor'

export const PostsList = () => {
  //useselector butun redux global state de ki bilgileri çeker
  const posts = useSelector((state) => state.posts) //global redux un içinden sadece posts alanını al

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.userId}/>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        {/* Bu linek tıklandığı anda /posts/${posts.id} adresine yönledirir */}
        View Post
      </Link>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
