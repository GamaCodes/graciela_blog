//import { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPosts } from "../posts";
import {
  Heading,
  IconButton,
  Input
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import '../App.css'

export async function loader() {
    const posts = await getPosts();
    return { posts };
}

function Posts() {

    const { posts } = useLoaderData();

  return (
    <>
      <Heading as='h1' color="brand.100" textAlign={'center'}>Noticias</Heading>
      <Input placeholder='Buscar noticia' />
      <IconButton
          colorScheme='blue'
          aria-label='Search database'
          icon={<SearchIcon />}
      />
      {
        posts.length > 0 && posts.map((post, index) => {
          return (
            <div key={index}>
              <p>Titulo: {post.title.rendered}</p>
              <p>Fecha: {post.date}</p>
              <Link to={`/posts/${post.id}`}>Ver más</Link>
            </div>
          )
        })
      }
    </>
  )
}

export default Posts
