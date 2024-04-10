import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { BasicTable } from './components/table'
import { Header } from './components/header'

export function App() {
  return (
    <ChakraProvider>
       <Box>
        <Header/>
       </Box>
      <Box>
      <Flex justifyContent="center" alignItems="center" height="100vh">
      <BasicTable/>
      </Flex>
      </Box>
    </ChakraProvider>
  )
}