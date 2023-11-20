import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react'

export default function Construction() {
  return (
    <div className='buil-page'>
        <Card align='center'>
            <CardHeader>
                <Heading size='md' as='h1'> Graciela Dominguez</Heading>
            </CardHeader>
            <CardBody>
                <Text>Sitio en Construcción</Text>
            </CardBody>
            <CardFooter>
            <Text>Contactános: contacto@gracieladominguez.org</Text>
            </CardFooter>
        </Card>
    </div>
  );
}