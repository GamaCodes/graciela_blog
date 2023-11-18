import * as ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      brand: {
        100: "#e10098",
        900: "#1a202c",
      },
    },
  })

export default theme