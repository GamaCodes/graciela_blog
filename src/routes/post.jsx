import { useLoaderData } from "react-router-dom";
import { getPost } from "../posts";
import { Heading } from '@chakra-ui/react'

export async function loader({ params }) {
  const post = await getPost(params.postId);
  return { post };
}

export default function Post() {
  const { post } = useLoaderData();
  return (
    <div> 
      <Heading as='h1' color="brand.100" textAlign={'center'}>{post.title.rendered}</Heading>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
    </div>
  );
}

