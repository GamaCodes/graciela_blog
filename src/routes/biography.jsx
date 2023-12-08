import { useState } from 'react'
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPosts, getCategories } from "../posts";
import axios from 'axios'
import {
  Heading,
  Text,
  Image,
  Card,
  CardBody
} from '@chakra-ui/react'
import '../App.css'

export async function loader() {
    const posts = await getPosts();
    const categories = await getCategories();
    return { posts, categories };
}

function Biography() {

  return (
    <>
      <div className="bio-container"> 
        <Card className='bio-card-container'>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '400px' }}
            src='https://gracieladominguez.org/worpress/blog/wp-content/uploads/2023/11/Graciela_Dominguez_Nava-edited.jpeg'
            alt='Graciela Dominguez'
          />
          <CardBody className="card-container">
          <Heading as='h1' color="brand.100" size='lg' textAlign={'center'}>Graciela Dominguez</Heading>
            <Text py='2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit purus, ullamcorper a ipsum tempor, lobortis sodales justo. Curabitur at risus sit amet nunc ornare mollis a in tortor. Suspendisse potenti. Duis eget condimentum odio, sed tempor eros. Vestibulum sed consectetur diam. Mauris blandit laoreet ipsum sit amet porttitor. Vestibulum eget lobortis ante. Suspendisse vulputate dolor vel quam lacinia dapibus. Integer maximus elit pretium, hendrerit nunc quis, iaculis urna. In consequat purus at est posuere tincidunt. Donec sodales est non efficitur maximus.
            </Text>
            <Text py='2'>
              Nam consectetur turpis vel egestas pharetra. Curabitur vitae ipsum et lectus mollis commodo a sed velit. Pellentesque aliquam blandit mi, at pretium lorem fringilla vitae. Suspendisse in sodales nunc, vel eleifend odio. Maecenas augue augue, imperdiet quis nunc ut, dignissim dapibus turpis. Donec volutpat turpis eu elit ultricies lobortis. Morbi magna turpis, aliquet et velit in, molestie ultrices justo. Nulla a felis arcu. Cras feugiat sodales finibus. Nunc vulputate nec tortor eu vehicula. Mauris non ligula id ligula sodales lacinia. Cras pellentesque fermentum ante ac vulputate. Duis blandit, lorem blandit rutrum imperdiet, lectus nisl euismod odio, in efficitur nulla est nec sem. Sed sit amet magna nec lectus consectetur mollis vel in sapien. Duis nisi lectus, suscipit ut elit ac, tempor dignissim justo. In id enim pretium, faucibus felis vel, ultrices lectus.
            </Text>
          </CardBody>
        </Card>
      </div>
      
      
    </>
  )
}

export default Biography
