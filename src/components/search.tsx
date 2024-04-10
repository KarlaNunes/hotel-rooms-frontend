import { Input, Button, Flex} from '@chakra-ui/react'
import { MdOutlineSearch } from "react-icons/md";

export function Search() {
    return (
        <Flex gap={'5px'} maxWidth={500}>  
            <Input placeholder='Search'/>
            <Button border={'2px solid'} borderColor={'#B67B44'} background={tra}><MdOutlineSearch/></Button>
        </Flex>
    )
}