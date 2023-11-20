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

function Home() {
  const { posts } = useLoaderData();

  return (
    <>
      <Heading as='h1' color="brand.100" textAlign={'center'}>Graciela Dominguez</Heading>
      <div className="card">
        <p>
          Sitio en Construcción
        </p>
      </div>
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

export default Home
