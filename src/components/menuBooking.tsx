import { MdMoreHoriz, MdOutlineEdit, MdDeleteOutline, MdOutlinePayments } from "react-icons/md";
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react'

export function ActionsBooking() {
    const iconSize = 16
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<MdMoreHoriz />}
                background={"transparent"}
               
            />
            <MenuList>
                <MenuItem icon={<MdOutlineEdit size={iconSize} />} >
               Edit
                </MenuItem>
                <MenuItem color={'green'} icon={<MdOutlinePayments size={iconSize} color={'green'}/>} >
                Confirm Payment
                </MenuItem>
                <MenuItem color={'red'} icon={<MdDeleteOutline size={iconSize} color={'red'}/>} >
                Delete
                </MenuItem>
            </MenuList>
            </Menu>
    )
}