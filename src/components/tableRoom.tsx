// tableRoom.tsx
import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';
import { ActionsRoom } from './menuRoom';

interface TableRoomProps {
  onEditClick: () => void;
  onBookRoomClick: () => void; // Adicionando nova prop
}

export function TableRoom({ onEditClick, onBookRoomClick }: TableRoomProps) {
  const tableMinWidth = '80rem';

  return (
    <TableContainer border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'}>
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
          <Tr>
            <Td align='center'>206</Td>
            <Td align='center'>2</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>
              <ActionsRoom onEditClick={onEditClick} onBookRoomClick={onBookRoomClick} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
