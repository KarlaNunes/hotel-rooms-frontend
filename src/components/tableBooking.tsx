// tableBooking.tsx
import { Table, Tbody, Tr, Th, Td, TableContainer, Thead } from '@chakra-ui/react';
import { ActionsBooking } from './menuBooking';

interface TableBookingProps {
    onEditClick: () => void;
}

export function TableBooking({ onEditClick }: TableBookingProps) {
    const tableMinWidth = '80rem';

    return (
        <TableContainer border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'}>
            <Table variant='simple' size='lg' minWidth={tableMinWidth}>
                <Thead>
                    <Tr>
                        <Th align='center'>Número do Quarto</Th>
                        <Th align='center'>Check-in</Th>
                        <Th align='center'>Check-out</Th>
                        <Th align='center'>Preço</Th>
                        <Th align='center'>Método de Pagamento</Th>
                        <Th align='center'>Nome do Cliente</Th>
                        <Th align='center'>Contato do Cliente</Th>
                        <Th align='center'>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* Table rows */}
                    <Tr>
                        <Td align='center'>206</Td>
                        <Td align='center'>20/10/2024</Td>
                        <Td align='center'>21/10/2025</Td>
                        <Td align='center'>800</Td>
                        <Td align='center'>Cartão</Td>
                        <Td align='center'>Lorelai Gilmore</Td>
                        <Td align='center'>84999999</Td>
                        <Td align='center'>
                            <ActionsBooking onEditClick={onEditClick} formType="booking" />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}
