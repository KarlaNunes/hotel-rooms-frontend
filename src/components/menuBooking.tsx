// actionsBooking.tsx
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react';
import { MdMoreHoriz, MdOutlinePayments } from "react-icons/md";

export function ActionsBooking() {
    const iconSize = 16;

    return (
        <Menu>
            <MenuButton as={IconButton} icon={<MdMoreHoriz />} background={"transparent"} />
            <MenuList>
                <MenuItem onClick={() => alert("Payment confirmed!")} color={'green'} icon={<MdOutlinePayments size={iconSize} color={'green'} />} >
                    Confirm Payment
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
