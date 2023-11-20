//import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
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

function Search() {

  return (
    <>
      <Heading as='h1' color="brand.100" textAlign={'center'}>Buscador</Heading>
      <Input placeholder='Buscar noticia' />
      <IconButton
          colorScheme='blue'
          aria-label='Search database'
          icon={<SearchIcon />}
      />
    </>
  )
}

export default Search
