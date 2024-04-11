import { FormControl, FormLabel, Input, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Box, Button } from '@chakra-ui/react';

const black = '#646464'
const gold = '#bf8b5a'

export function FormBooking() {
  return (
    <Box w="65rem" border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} p={10}> 
      <FormControl>
        <Flex>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Client name:</FormLabel>
            <Input placeholder="Enter client name" />
          </Box>
          <Box w="50%">
            <FormLabel color={black}>Client contact:</FormLabel>
            <Input type='tel' placeholder="Enter client contact" />
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={10}>
        <Flex>
          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Room number:</FormLabel>
            <Select placeholder="Select room number">
              
            </Select>
          </Box>
          <Box mr={14} w="33.33%">
            <FormLabel color={black}>Payment method:</FormLabel>
            <Select placeholder="Select payment method">
              
            </Select>
          </Box>
          <Box w="33.33%">
            <FormLabel color={black}>Price:</FormLabel>
            <NumberInput defaultValue={0} min={0} w="100%">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={10}>
        <Flex>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Check-in date:</FormLabel>
            <Input type="date" />
          </Box>
          <Box w="50%">
            <FormLabel color={black}>Check-in time:</FormLabel>
            <Input type="time" />
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={10}>
        <Flex>
          <Box mr={14} w="50%"> 
            <FormLabel color={black}>Check-out date:</FormLabel>
            <Input type="date" />
          </Box>
          <Box w="50%">
            <FormLabel color={black}>Check-out time:</FormLabel>
            <Input type="time" />
          </Box>
        </Flex>
      </FormControl>

      <Flex justify="flex-end" mt={10}>
        <Button color={'white'} background={gold}>Save</Button>
      </Flex>
    </Box>
  );
}
