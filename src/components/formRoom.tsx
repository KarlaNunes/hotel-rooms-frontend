import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Box, Button, Select } from '@chakra-ui/react';
import { updateRoom } from '../services/room/updateRoom';
import { createRoom } from '../services/room/createRoom';
import { getRoomById } from '../services/room/getRoomById';
import { Room } from '../@types/Room';
import { useState, useEffect } from 'react';

const black = '#646464';
const gold = '#bf8b5a';

export interface FormRoomProps {
  roomId?: number;
}

export function FormRoom({ roomId }: FormRoomProps) {
  const initialRoomData: Room = {
    available: true,
    n_of_bathrooms: 0,
    numeration: 0,
    n_of_beds: 0
  };

  const [roomData, setRoomData] = useState<Room>(initialRoomData);

  useEffect(() => {
    if (roomId) {
      getRoomData(roomId);
    }
  }, [roomId]);

  const getRoomData = async (id: number) => {
    try {
      const room = await getRoomById(id);
      setRoomData(room);
    } catch (error) {
      console.error(`Failed to fetch room data: ${error}`);
    }
  };

  const handleSaveRoom = async () => {
    try {
      if (roomId) {
        await updateRoom(roomData);
      } else {
        await createRoom(roomData);
        setRoomData(initialRoomData);
      }
      alert('Room saved successfully!');
    } catch (error) {
      alert(`Failed to save room: ${error}`);
    }
  };

  const handleInputChange = (name: keyof Room, value: string | number | boolean) => {
    setRoomData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Box w="65rem" border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} p={10}> 
      <FormControl>
        <Flex>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Room Number:</FormLabel>
            <Input type="text" name="numeration" value={roomData.numeration} onChange={e => handleInputChange('numeration', e.target.value)} placeholder="Enter room number" />
          </Box>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Beds:</FormLabel>
            <NumberInput min={0} value={roomData.n_of_beds} onChange={(_valueString, valueNumber) => handleInputChange('n_of_beds', valueNumber)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
        <Flex mt={10}>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Bathrooms:</FormLabel>
            <NumberInput min={0} value={roomData.n_of_bathrooms} onChange={(_valueString, valueNumber) => handleInputChange('n_of_bathrooms', valueNumber)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box mr={14} w="50%" >
            <FormLabel color={black}>Available:</FormLabel>
            <Select name="available" value={roomData.available ? 'yes' : 'no'} onChange={e => handleInputChange('available', e.target.value === 'yes' ? true : false)}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Box>
        </Flex>
      </FormControl>

      <Flex justify="flex-end" mt={10}>
        <Button color={'white'} background={gold} onClick={handleSaveRoom}>Save</Button>
      </Flex>
    </Box>
  );
}
