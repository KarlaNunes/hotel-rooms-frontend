import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';
import { ActionsBooking } from './menuBooking';


export function TableBooking() {
    const tableMinWidth = '80rem';


    return (
        <TableContainer>
            <Table variant='simple' size='lg' minWidth={tableMinWidth}>
                <Thead>
                    <Tr>
                        <Th align='center'>Room number</Th>
                        <Th align='center'>Check-in</Th>
                        <Th align='center'>Check-out</Th>
                        <Th align='center'>Price</Th>
                        <Th align='center'>Payment method</Th>
                        <Th align='center'>Client name</Th>
                        <Th align='center'>Client contact</Th>
                        <Th align='center'>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td align='center'>206</Td>
                        <Td align='center'>20/10/2024</Td>
                        <Td align='center'>21/10/2025</Td>
                        <Td align='center'>800</Td>
                        <Td align='center'>Card</Td>
                        <Td align='center'>Lorelai Gilmore</Td>
                        <Td align='center'>84999999</Td>
                        <Td align='center'>
                            <ActionsBooking />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>206</Td>
                        <Td align='center'>20/10/2024</Td>
                        <Td align='center'>21/10/2025</Td>
                        <Td align='center'>800</Td>
                        <Td align='center'>Card</Td>
                        <Td align='center'>Lorelai Gilmore</Td>
                        <Td align='center'>84999999</Td>
                        <Td align='center'>
                            <ActionsBooking />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}
