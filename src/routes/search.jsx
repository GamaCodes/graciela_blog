import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import {
  Heading,
  IconButton,
  Input, 
  SkeletonCircle, 
  SkeletonText, 
  Box,
  FormControl,
  Button,
  Card,
  CardBody
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import '../App.css'

export async function loader() {
    const posts = await getPosts();
    return { posts };
}

function Search() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState('');

  const toast = useToast()

  const postsSearch = async (parameter) => {
    let result = await axios.get(`https://gracieladominguez.org/worpress/blog/wp-json/wp/v2/posts?per_page=50&search=${parameter}&_fields[]=title&_fields[]=date&_fields[]=id`)
    .then((response) => response.data
    )
    result.length == 0  ? toast({
        title: 'Lo sentimos',
        description: "No se encontraron resultados. Intenta con algo diferente.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      }) : toast({
        title: 'Busqueda exitosa',
        description: `Se encontraron ${result.length} resultados`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
  

    return setData(result)
  }

  const handleSubmit = event => {
    event.preventDefault();
    search.length > 3 ? postsSearch(search) : toast({
      title: 'Error en la busqueda',
      description: "Debes ingresar al menos 4 caracteres",
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <div >
        <form onSubmit={handleSubmit} className="searcher-container">
          <FormControl>
            <Input 
              placeholder='Buscar noticia' 
              className="searcher-input"
              onChange={event => setSearch(event.currentTarget.value)}
            />
          </FormControl>
          <IconButton
              colorScheme='blue'
              aria-label='Search database'
              type="submit"
              icon={<SearchIcon />}
          />
        </form>
      </div>

      {
        data.length >= 1 ? (
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
          ) : (
            <div className="searcher-skeleton">
              <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
              </Box>
      
              <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
              </Box>
      
              <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
              </Box>
            </div>
          )
        
      }

      

    </>
  )
}

export default Search
