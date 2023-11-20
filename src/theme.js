import * as ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      brand: {
        100: "#008b8b",
        900: "#1a202c",
      },
    },
  })

export default theme