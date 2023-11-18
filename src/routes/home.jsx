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
    /*
  const [posts, setPosts] = useState({})

  const getPosts = ()=> {
    axios.get('http://gracieladominguez.org/wp-json/wp/v2/posts').then((response) => {
      setPosts(response.data);
    })
  }

  useEffect(()=> {
    getPosts()
  }, [])

  console.log(posts, 'posts')
  */

  return (
    <>
      <Heading bg="brand.100">Vite & React</Heading>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
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
