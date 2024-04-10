import { Heading } from '@chakra-ui/react';

type ItemProps = {
    text : string
}

export function Title(props:ItemProps){
    return (
        <Heading fontSize={26} color={'#B67B44'}>{props.text}</Heading>
    )
}