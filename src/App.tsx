import { ChakraProvider, Box, Flex} from '@chakra-ui/react'
import { BasicTable } from './components/table'
import { Header } from './components/header'
import { Title } from './components/title'
import { Search } from './components/search'

export function App() {

  return (
    <ChakraProvider>
      <Box>
      <Header/>
      </Box>
      
      <Flex  flexDirection={'column'} alignItems={'center'}>
      <Flex flexDirection={'column'} alignItems={'start'} justifyContent={'center'} height="100vh" gap={10}>
        <Box>
          <Title text='Rooms'/>
        </Box>
        <Box>
          <Search/>
        </Box>
        <Box>
        <BasicTable/>
        </Box>
      </Flex>
      </Flex>
    </ChakraProvider>
  )
}