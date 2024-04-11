import { MdMoreHoriz, MdOutlineEdit, MdDeleteOutline, MdOutlineBed } from "react-icons/md";
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react';



interface ActionsRoomProps {
    onEditClick: () => void;
    onBookRoomClick: () => void;
}

export function ActionsRoom({ onEditClick, onBookRoomClick }: ActionsRoomProps) {
    const iconSize = 16;

    const handleEditClick = () => {
        onEditClick();
    };

    const handleBookRoomClick = () => {
        onBookRoomClick();
    };

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<MdMoreHoriz />}
                background={"transparent"}
            />
            <MenuList>
                <MenuItem icon={<MdOutlineEdit size={iconSize} />} onClick={handleEditClick}>
                    Edit
                </MenuItem>
                <MenuItem color={'#bf8b5a'} icon={<MdOutlineBed size={iconSize} color={'#bf8b5a'} />} onClick={handleBookRoomClick}>
                    Book Room
                </MenuItem>
                <MenuItem color={'red'} icon={<MdDeleteOutline size={iconSize} color={'red'} />} >
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
