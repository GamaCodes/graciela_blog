import { useLoaderData } from "react-router-dom";
import { getPost } from "../posts";
import { Heading } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Tweet } from 'react-tweet'

export async function loader({ params }) {
  const post = await getPost(params.postId);
  return { post };
}

export default function Post() {
  const { post } = useLoaderData();

  const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };

  const postData = post.content.rendered

  const isTweet = postData.search("https://twitter.com") > 0 ? true : false

  const idTweet = isTweet && postData.split('/status/')[1].split('?ref')

console.log()

  return (
    <div className="post-container"> 
      <Card>
        <CardBody className="card-container">
          <Heading as='h1' color="brand.100" textAlign={'center'}>{post.title.rendered}</Heading>
          <Text fontSize='sm' align={"right"}>{new Date(post.date.split("T")[0]).toLocaleString("es-ES", dateFormat)}</Text>
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}} className="post-html"/>
          { isTweet && <div className="tweet-container"><Tweet id={idTweet[0]}/></div>}
        </CardBody>
      </Card>
    </div>
  );
}

