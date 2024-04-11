// actionsBooking.tsx
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react';
import { MdMoreHoriz, MdOutlineEdit, MdDeleteOutline, MdOutlinePayments } from "react-icons/md";

export interface ActionsBookingProps {
    onEditClick: () => void; 
    formType: 'room' | 'booking'; 
}

export function ActionsBooking({ onEditClick}: ActionsBookingProps) {
    const iconSize = 16;

    return (
        <Menu>
            <MenuButton as={IconButton} icon={<MdMoreHoriz />} background={"transparent"} />
            <MenuList>
                <MenuItem icon={<MdOutlineEdit size={iconSize} />} onClick={onEditClick}>
                    Editar
                </MenuItem>
                <MenuItem color={'green'} icon={<MdOutlinePayments size={iconSize} color={'green'} />} >
                    Confirmar Pagamento
                </MenuItem>
                <MenuItem color={'red'} icon={<MdDeleteOutline size={iconSize} color={'red'} />} >
                    Deletar
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
