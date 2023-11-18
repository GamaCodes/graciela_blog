//import { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPosts } from "../posts";
import { Heading } from '@chakra-ui/react'
import '../App.css'

export async function loader() {
    const posts = await getPosts();
    return { posts };
}

function Posts() {

    const { posts } = useLoaderData();

  return (
    <>
      <Heading bg="brand.100">Posts</Heading>
      {
        posts.length > 0 && posts.map((post, index) => {
          return (
            <div key={index}>
              <p>Titulo: {post.title.rendered}</p>
              <p>ID: {post.id}</p>
              <Link to={`/posts/${post.id}`}>Ver más</Link>
            </div>
          )
        })
      }
    </>
  )
}

export default Posts
