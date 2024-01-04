//import { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getMainPosts } from "../posts";
import {
  Heading,
  Button,
  Stack,
  Card,
  CardBody,
  Image
} from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css'

export async function loader() {
    const mainPosts = await getMainPosts();
    return { mainPosts };
}

function Home() {
  const { mainPosts } = useLoaderData();

  const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <>
      <Carousel infiniteLoop={true}>
      {
        mainPosts.stickyPosts.length > 0 && mainPosts.stickyPosts.map((post, index) => {
          return (
            <Link to={`/posts/${post.id}`} className='main-link-hover'>
              <div key={index} className="hero-container">
                <Image
                  objectFit='cover'
                  className='hero-image'
                  src={post.jetpack_featured_media_url}
                  alt={post.title.rendered}
                />
                <div className="hero-text">
                  <Heading as='h2' size='3xl' color='#fff'>{post.title.rendered}</Heading>
                  <p style={{ marginTop: '1rem', color: '#fff', fontWeight: 'bold'}}>
                    {new Date(post.date.split("T")[0]).toLocaleString("es-ES", dateFormat)}
                  </p>
                </div>
              </div>
            </Link>
          )
        })
      }
      </Carousel>

      <div className="main-posts">

            {
              mainPosts.notStickyPosts.length > 0 && mainPosts.notStickyPosts.map((post, index) => {
                return (
                  <div key={index} className="post-list">
                    <Link to={`/posts/${post.id}`} className='card-hover'>
                    <Card
                      direction={{ base: 'column', sm: 'column' }}
                      overflow='hidden'
                      variant='outline'
                      className="card-main"
                    >
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40vw' }}
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
      </div>
      

    </>
  )
}

export default Home
