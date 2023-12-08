import { useState } from 'react'
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPosts, getCategories } from "../posts";
import axios from 'axios'
import {
  Heading,
  Button,
  Stack,
  Card,
  CardBody
} from '@chakra-ui/react'
import '../App.css'

export async function loader() {
    const posts = await getPosts();
    const categories = await getCategories();
    return { posts, categories };
}

function Posts() {

    const { posts, categories } = useLoaderData();

    const [data, setData] = useState(posts);

    const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };

    const categoriesSearch = async (id) => {
      let result = await axios.get(`https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?categories=${id}&_fields[]=title&_fields[]=date&_fields[]=id`)
      .then((response) => response.data
      )
      console.log(result, 'result')
      return setData(result)
    }

    const clearFilter = () => setData(posts)

  return (
    <>
      <div className='stack-posts'>
        <div className="post-body">
          <Button colorScheme="brand" size='md' onClick={() => clearFilter()}>
            Todas
          </Button>
        </div>
        {
          categories.length > 0 && categories.map((category, index) => {
            return (
              <div key={index} className="post-body">
                <Button colorScheme="brand" size='md' onClick={() => categoriesSearch(category.id)}>
                {category.name}
                </Button>
              </div>
            )
          })
        }
      </div>
      <div className="post-container"> 
        <Card>
          <CardBody className="card-container">
            {
              data.length > 0 && data.map((post, index) => {
                return (
                  <div key={index} className="post-body">
                    <Heading as='h2' color="brand.100">Titulo: {post.title.rendered}</Heading>
                    <p>Fecha: {new Date(post.date.split("T")[0]).toLocaleString("es-ES", dateFormat)}</p>
                    <Link to={`/posts/${post.id}`}><Button color='brand.100'>Ver más</Button></Link>
                  </div>
                )
              })
            }
          </CardBody>
        </Card>
      </div>
      
      
    </>
  )
}

export default Posts
