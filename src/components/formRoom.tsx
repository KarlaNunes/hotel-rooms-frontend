import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Box, Button } from '@chakra-ui/react';

const black = '#646464';
const gold = '#bf8b5a';

export function FormRoom() {
  return (
    <Box w="65rem" border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} p={10}> 
      <FormControl>
        <Flex>
          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Room Number:</FormLabel>
            <Input type="text" placeholder="Enter room number" />
          </Box>
          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Beds:</FormLabel>
            <NumberInput defaultValue={0} min={0} w="100%">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w="33.33%"> 
            <FormLabel color={black}>Bathrooms:</FormLabel>
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

      <Flex justify="flex-end" mt={10}>
        <Button color={'white'} background={gold}>Save</Button>
      </Flex>
    </Box>
  );
}
