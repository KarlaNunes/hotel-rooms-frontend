import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';

export function BasicTable() {
  const tableMinWidth = '62.5rem';

  return (
    <TableContainer>
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
            <Td align='center'>25.4</Td>
          </Tr>
          <Tr>
            <Td align='center'>206</Td>
            <Td align='center'>2</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
          </Tr>
          <Tr>
            <Td align='center'>206</Td>
            <Td align='center'>2</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
          </Tr>
          <Tr>
            <Td align='center'>206</Td>
            <Td align='center'>2</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
            <Td align='center'>25.4</Td>
          </Tr>
        </Tbody>

      </Table>
    </TableContainer>
  );
}
