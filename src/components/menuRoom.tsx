import { MdMoreHoriz, MdOutlineEdit, MdDeleteOutline, MdOutlineBed } from "react-icons/md";
import { Menu, MenuList, MenuItem, IconButton, MenuButton } from '@chakra-ui/react';
interface ActionsRoomProps {
    onEditClick: (roomId: number) => void;
    onBookRoomClick: () => void;
    onDeleteRoomClick: (roomId: number) => void;
    roomId?: number;
}

export function ActionsRoom({ onEditClick, onBookRoomClick, onDeleteRoomClick, roomId }: ActionsRoomProps) {
    const iconSize = 16;

    const handleEditClick = () => {
        if (roomId !== undefined) { 
            onEditClick(roomId); 
        }
    };

    const handleBookRoomClick = () => {
        onBookRoomClick();
    };

    const handleDeleteRoomClick = () => {
        if (roomId !== undefined) { 
            onDeleteRoomClick(roomId); 
        }
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
                <MenuItem color={'red'} icon={<MdDeleteOutline size={iconSize} color={'red'} />} onClick={handleDeleteRoomClick}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
}