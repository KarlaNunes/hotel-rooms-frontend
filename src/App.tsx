// App.tsx
import { useState } from 'react';
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

    const handleEditForm = () => {
        setShowForm(true);
        setPageTitle(screenType === 'rooms' ? 'Edit Room' : 'Edit Booking');
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
                        {!showForm && screenType === 'rooms' && <AddButton text="New Room" onClick={() => handleShowForm('rooms')} />}
                        {!showForm && screenType === 'bookings' && <AddButton text="New Booking" onClick={() => handleShowForm('bookings')} />}
                    </Flex>
                    <Box>
                        {showForm ? (screenType === 'rooms' ? <FormRoom /> : <FormBooking />) : (screenType === 'rooms' ? <TableRoom onEditClick={handleEditForm} /> : <TableBooking onEditClick={handleEditForm} />)}
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}
