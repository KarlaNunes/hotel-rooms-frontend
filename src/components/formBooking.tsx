import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Box, Button } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { createUser } from '../services/users/createUsers';
import { createCreditCard } from '../services/credit-card/createCreditCard';

const black = '#646464'
const gold = '#bf8b5a'

export function FormBooking() {
  const [formData, setFormData] = useState({
    name: '',
    social_security_card: '',
    contact: '',
    number: '',
    due_date: '',
    cvv: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { name, social_security_card, contact } = formData;
      const newUser = await createUser({ name, social_security_card, contact });

      const creditCardData = {
        owner: newUser.id,
        number: formData.number,
        due_date: formData.due_date,
        cvv: formData.cvv
      };

      await createCreditCard(creditCardData);

      setFormData({ name: '', social_security_card: '', contact: '', number: '', due_date: '', cvv: '' });
    } catch (error) {
      console.error('Erro ao criar o usuário ou o cartão de crédito:', error);
    }
  };


  return (
    <Box w="65rem" border={'1px solid'} borderRadius={10} borderColor={'#E2E8F0'} p={10}> 

    <form onSubmit={handleSubmit}>
      <FormControl>
        <Flex>
          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Client name:</FormLabel>
            <Input name='name' value={formData.name} onChange={handleInputChange} placeholder="Enter client name" />
          </Box>

          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Social security card:</FormLabel>
            <Input name='social_security_card' value={formData.social_security_card} onChange={handleInputChange} placeholder="Enter social security card" />
          </Box>

          <Box w="33.33%">
            <FormLabel color={black}>Client contact:</FormLabel>
            <Input name='contact' value={formData.contact} onChange={handleInputChange} type='tel' placeholder="Enter client contact" />
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={10}>
        <Flex>
          
          <Box mr={14} w="33.33%">
            <FormLabel color={black}>Card number:</FormLabel>
            <Input name='number' value={formData.number} onChange={handleInputChange} placeholder="Enter card number" />
          </Box>
          
          <Box mr={14} w="33.33%"> 
            <FormLabel color={black}>Card due date:</FormLabel>
            <Input name='due_date' value={formData.due_date} onChange={handleInputChange} type="date" />
          </Box>
          <Box w="33.33%">
            <FormLabel color={black}>CVV:</FormLabel>
            <Input name='cvv' value={formData.cvv} onChange={handleInputChange} placeholder="Enter CVV" />
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={10}>
        <Flex>
        <Box mr={14} w="50%"> 
            <FormLabel color={black}>Room number:</FormLabel>
            <Input placeholder="Enter room number" />
          </Box>
  
          <Box w="50%">
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
        <Button type='submit' color={'white'} background={gold}>Save</Button>
      </Flex>

    </form>
    </Box>
  );
}
