import { Image, Box, Flex, Link, Divider } from '@chakra-ui/react';
import { MdPermIdentity } from "react-icons/md";

interface HeaderProps {
    onSwitchToRooms: () => void;
    onSwitchToBookings: () => void;
}

export function Header({onSwitchToRooms, onSwitchToBookings }: HeaderProps) {
    const brown = '#794819'
    const goldenLine = '#B67B44'

    return (
        <Box>
            <Box pt='8' pb='6' maxW="100rem" mx="auto" px="10">
                <Flex alignItems="center" justifyContent='space-between'>
                    <Image src='public/logo.svg' alt='Independence Inn Logo' />
                    <Link color={brown} fontWeight="semibold" style={{ textDecoration: 'none' }} onClick={onSwitchToRooms}>Rooms</Link>
                    <Link color={brown} fontWeight="semibold" style={{ textDecoration: 'none' }} onClick={onSwitchToBookings}>Bookings</Link>
                    <MdPermIdentity size={24} color={brown} />
                </Flex>
            </Box>
            <Divider orientation="horizontal" borderColor={goldenLine} />
        </Box>
    )
}
