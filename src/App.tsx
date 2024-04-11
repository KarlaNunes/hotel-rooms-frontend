import{ useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { TableRoom } from './components/tableRoom';
import { TableBooking } from './components/tableBooking';
import { Header } from './components/header';
import { Title } from './components/title';
import { Search } from './components/search';
import { AddButton } from './components/createButton';
import { FormRoom } from './components/formRoom';
import { FormBooking } from './components/formBooking';

type ScreenType = 'rooms' | 'bookings';

export function App() {
  const [screenType, setScreenType] = useState<ScreenType>('rooms');
  const [showForm, setShowForm] = useState(false);
  const [pageTitle, setPageTitle] = useState('Rooms');

  const handleSwitchToRooms = () => {
    setShowForm(false);
    setScreenType('rooms');
    setPageTitle('Rooms');
  };

  const handleSwitchToBookings = () => {
    setShowForm(false);
    setScreenType('bookings');
    setPageTitle('Bookings');
  };

  const handleShowForm = (type: ScreenType) => {
    setShowForm(true);
    setScreenType(type);
    setPageTitle(type === 'rooms' ? 'Create Room' : 'Book Room');
  };

  return (
    <ChakraProvider>
      <Box>
        <Header onSwitchToBookings={handleSwitchToBookings} onSwitchToRooms={handleSwitchToRooms} />
      </Box>

      <Flex flexDirection={'column'} alignItems={'center'}>
        <Flex flexDirection={'column'} alignItems={'start'} justifyContent={'center'} marginTop={100} gap={10}>
          <Box>
            <Title text={pageTitle} />
          </Box>
          <Flex justifyContent={'space-between'} width={'100%'}>
            {!showForm && <Search />}
            {!showForm && (
              <AddButton text={`New ${screenType === 'rooms' ? 'Room' : 'Booking'}`} onClick={() => handleShowForm(screenType)} />
            )}
          </Flex>

          <Box>
            {showForm ? (screenType === 'rooms' ? <FormRoom /> : <FormBooking />) : (screenType === 'rooms' ? <TableRoom /> : <TableBooking />)}
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
