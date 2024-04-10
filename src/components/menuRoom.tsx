import { MdMoreHoriz, MdOutlineBed, MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react'

export function ActionsRoom() {
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
                <MenuItem color={'#bf8b5a'} icon={<MdOutlineBed size={iconSize} color={'#bf8b5a'}/>} >
                Book Room
                </MenuItem>
                <MenuItem color={'red'} icon={<MdDeleteOutline size={iconSize} color={'red'}/>} >
                Delete
                </MenuItem>
            </MenuList>
            </Menu>
    )
}