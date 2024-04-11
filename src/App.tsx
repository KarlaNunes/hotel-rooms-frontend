import { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { TableRoom } from './components/tableRoom'
import { TableBooking } from './components/tableBooking'
import { Header } from './components/header'
import { Title } from './components/title'
import { Search } from './components/search'
import { AddButton } from './components/createButton'

export function App() {
  const [screenType, setScreenType] = useState('rooms');

  const handleSwitchToRooms = () => {
    setScreenType('rooms');
  }

  const handleSwitchToBookings = () => {
    setScreenType('bookings');
  }

  return (
    <ChakraProvider>
      <Box>
        <Header onSwitchToBookings={handleSwitchToBookings} onSwitchToRooms={handleSwitchToRooms}/>
      </Box>

      <Flex flexDirection={'column'} alignItems={'center'}>
        <Flex flexDirection={'column'} alignItems={'start'} justifyContent={'center'} marginTop={100} gap={10}>
          <Box>
            <Title text={screenType === 'rooms' ? 'Rooms' : 'Bookings'} />
          </Box>
          <Flex justifyContent={'space-between'} width={'100%'}>
            <Search />
            <AddButton text={screenType === 'rooms' ? 'New Room' : 'New Booking'} />
          </Flex>
          <Box>
          </Box>
          <Box>
            {screenType === 'rooms' ? <TableRoom /> : <TableBooking />}
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
