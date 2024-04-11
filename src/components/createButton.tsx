import { Button } from '@chakra-ui/react'
import { MdAdd } from "react-icons/md";

type ItemProps = {
    text : string
    onClick : () => void
}
export function AddButton(props:ItemProps) {

    return (
        <Button background={'#bf8b5a'}  color={'white'} fontWeight={'medium'}  onClick={props.onClick}>
            <MdAdd size={20} color={'white'}/>
            {props.text}
        </Button>
    )
}