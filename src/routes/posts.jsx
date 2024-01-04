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
  CardBody,
  Image
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

    const [option, setOption] = useState('Todas');

    const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };

    const categoriesSearch = async (id) => {
      let result = await axios.get(`https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?categories=${id}&_fields[]=title&_fields[]=date&_fields[]=id&_fields[]=excerpt&_fields[]=jetpack_featured_media_url`)
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
          <Button colorScheme="brand" className={option === 'Todas' ? 'filter-option filter-select' : 'filter-option'} size='md' onClick={() => {clearFilter(), setOption('Todas')}}>
            Todas
          </Button>
        </div>
        {
          categories.length > 0 && categories.map((category, index) => {
            return (
              <div key={index} className="post-body">
                <Button colorScheme="brand" size='md' className={option === category.name ? 'filter-option filter-select' : 'filter-option'} onClick={() => {categoriesSearch(category.id), setOption(category.name)}}>
                {category.name}
                </Button>
              </div>
            )
          })
        }
      </div>
      <div className="post-container"> 
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <CardBody className="card-container">
            {
              data.length > 0 && data.map((post, index) => {
                return (
                  <div key={index} className="post-list">
                    <Link to={`/posts/${post.id}`} className='card-hover'>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      
                    >
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '35vw' }}
                        src={post.jetpack_featured_media_url}
                        alt='Caffe Latte'
                      />

                      <Stack>
                        <CardBody>
                        <Heading as='h2'>{post.title.rendered}</Heading>

                          <p style={{textAlign: 'right', marginTop: '1rem', color: '#999'}}>
                          {new Date(post.date.split("T")[0]).toLocaleString("es-ES", dateFormat)}
                          </p>
                          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className="extract-html"/>
                        </CardBody>
                      </Stack>
                    </Card>

                    </Link>
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
