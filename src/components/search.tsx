import { Input, Button, Flex} from '@chakra-ui/react'
import { MdOutlineSearch } from "react-icons/md";

export function Search() {
    const gold = '#B67B44'
    return (
            <Flex gap={'5px'} maxWidth={500}>
                <Input placeholder='Search'/>
                <Button border={'2px solid'} borderColor={gold} background={'transparent'}><MdOutlineSearch size={22} color={gold}/></Button>
            </Flex>
    )
}