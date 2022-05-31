import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Evalution(props : {functionemp : string, describe : string, photo: string, name : string}) {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      borderStyle={"solid"}
      borderColor={"#7289DA"}
      borderWidth="1px"
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        {props.describe}
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            props.photo
          }
          alt={props.name}
          mb={2}
        />

        <Text fontWeight={600}>{props.name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'red.200')} >
           {props.functionemp}
        </Text>
      </Box>
    </Stack>
  );
}