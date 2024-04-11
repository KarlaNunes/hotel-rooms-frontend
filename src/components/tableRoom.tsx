import { useEffect, useState } from 'react';
import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';
import { MdCheck, MdOutlineClose } from "react-icons/md";
import { ActionsRoom } from './menuRoom';
import { listRooms } from '../services/room/listRooms';
import { Room } from '../@types/Room';

interface TableRoomProps {
  onEditClick: () => void;
  onBookRoomClick: () => void;
}

export function TableRoom({ onEditClick, onBookRoomClick }: TableRoomProps) {
  const [rooms, setRooms] = useState<Room[] | null>(null);
  const tableMinWidth = '80rem';
  const checkColor = 'green';
  const closeColor = 'red';

  useEffect(() => {
    async function fetchRooms() {
      try {
        const roomsData = await listRooms('http://localhost:3000');
        setRooms(roomsData);
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
        setRooms([]);
      }
    }
    

    fetchRooms();
  }, []);

  return (
    <TableContainer border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} mb={20}>
      <Table variant='simple' size='lg' minWidth={tableMinWidth}>
        <Thead>
          <Tr>
            <Th align='center'>Room number</Th>
            <Th align='center'>Beds</Th>
            <Th align='center'>Bathrooms</Th>
            <Th align='center'>Available</Th>
            <Th align='center'>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rooms !== null && rooms.length > 0 && rooms.map((room) => (
            <Tr key={room.id}>
              <Td align='center'>{room.numeration}</Td>
              <Td align='center'>{room.n_of_beds}</Td>
              <Td align='center'>{room.n_of_bathrooms}</Td>
              <Td align='center'>
                {room.available ? <MdCheck color={checkColor} /> : <MdOutlineClose color={closeColor} />}
              </Td>
              <Td align='center'>
                <ActionsRoom onEditClick={onEditClick} onBookRoomClick={onBookRoomClick} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
