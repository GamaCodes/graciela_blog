import { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Heading,
    Divider,
    Text,
    Icon
} from '@chakra-ui/react'
import { CgMenuGridR } from "react-icons/cg";
import { SearchIcon } from '@chakra-ui/icons'

export default function Root() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <div id="root-page">
        <div className="root-header">
            <Link to='/'>
                <Heading as='h2' size='xl' noOfLines={1} color='#fff'>
                    Graciela Dominguez
                </Heading>
            </Link>
            <Icon as={CgMenuGridR} onClick={onOpen} w={8} h={8} color='#fff' className='icon-cursor'/>
        </div>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Graciela Dominguez</DrawerHeader>

            <DrawerBody>
                <div className='root-option' onClick={onClose}>
                    <Link to={'/'}>
                        <Text fontSize='xl'>Inicio</Text>
                    </Link>
                </div>

                <Divider />

                <div className='root-option' onClick={onClose}>
                    <Link to={'/posts'}>
                        <Text fontSize='xl'>Noticias</Text>
                    </Link>
                </div>

                <Divider />

                <div className='root-option' onClick={onClose}>
                    <Link to={'/posts'}>
                        <Text fontSize='xl'>Sala de prensa</Text>
                    </Link>
                </div>

                <Divider />

                <div className='root-option' onClick={onClose} >
                    <Link to={'/posts'}>
                        <Text fontSize='xl'>Biografia</Text>  
                    </Link>
                </div>
            </DrawerBody>

            <DrawerFooter>
                <Link to={'/search'} onClick={onClose}>    
                    <Button rightIcon={<SearchIcon />} colorScheme='teal' variant='outline'>
                        Buscar noticia
                    </Button>
                </Link>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        <div id="home" className="main-container">
            <Outlet />
        </div>
    </div>
  );
}