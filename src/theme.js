import * as ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      brand: {
        100: "#af272f",
        500: "#af272f",
        900: "#1a202c",
      },
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: 'Montserrat'
        },
      }
    }
  })

export default theme