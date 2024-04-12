// tableBooking.tsx
import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';
import { ActionsBooking } from './menuBooking';
import { useEffect, useState } from 'react';
import { listBookings } from '../services/bookings/listBookings';
import { Booking } from '../@types/Booking';
import { getRoomById } from '../services/room/getRoomById';
import { getUserById } from '../services/users/getUserbyId';

interface TableBookingProps {
    onEditClick: () => void;
}

export function TableBooking({ onEditClick }: TableBookingProps) {
    const tableMinWidth = '80rem';
    const [bookings, setBookings] = useState<Booking[] | null>(null);
    
    
    useEffect(() => {
        async function fetchBookings() {
          try {
            const bookingsData = await listBookings();
            
            const bookingsWithRoomDetails = await Promise.all(
                bookingsData.map(async (booking) => {
                    const room = await getRoomById(booking.room!);
                    const user = await getUserById(booking.user_id!)
                    return { ...booking, roomNumber: room.numeration, clientName: user.name, clientContact: user.contact};
                })
            );
            setBookings(bookingsWithRoomDetails);
          } catch (error) {
            console.error('Failed to fetch bookings:', error);
            setBookings([]);
          }
        }
    
        fetchBookings();
    }, []);

    return (
        <TableContainer border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} mb={20}>
            <Table variant='simple' size='lg' minWidth={tableMinWidth}>
                <Thead>
                    <Tr>
                        <Th align='center'>Room number</Th>
                        <Th align='center'>Check-in</Th>
                        <Th align='center'>Check-out</Th>
                        <Th align='center'>Price</Th>
                        <Th align='center'>Client name</Th>
                        <Th align='center'>Client contact</Th>
                        <Th align='center'>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {bookings !== null && bookings.length > 0 && bookings.map((booking) => (
                    <Tr key={booking.id}>
                        <Td align='center'>{booking.roomNumber}</Td>
                        <Td align='center'>{booking.from_date}</Td>
                        <Td align='center'>{booking.until_date}</Td>
                        <Td align='center'>{booking.price}</Td>
                        <Td align='center'>{booking.clientName}</Td>
                        <Td align='center'>{booking.clientContact}</Td>
                        <Td align='center'>
                            <ActionsBooking onEditClick={onEditClick} formType="booking" />
                        </Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
