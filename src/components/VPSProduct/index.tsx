import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import router from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';


const PackageTier = (props: { id: number, dtype? : string, disk: number, ram: number, price: string, vCPU: number, planName: string, cpu : string }) => {
  let checked = false
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'black';
  const bgColorDark = checked ? 'purple.400' : 'green.400';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{props.planName}</Heading>
      <List spacing={3} textAlign="start">
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Ping de 120 a 150ms
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          {props.disk}GB de {props.dtype ?? "HDD"}
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          {props.vCPU}vCPU
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          {props.ram}GB de RAM
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          {props.cpu}
        </ListItem>
      </List>
      <Heading size={'xl'}>{props.price}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          _hover={{}}
          onClick={() => router.push("https://dash.ryzenhost.ovh/cart.php?a=add&pid=" + props.id)}
        >
          Comprar
        </Button>
      </Stack>
    </Stack>
  );
};
const VPSProduct = (props: { id: number, dtype? : string, planName: string, disk: number, ram: number, price: string, vCPU: number, cpu : string }) => {
  return (
    <PackageTier {...props} />
  );
};

export default VPSProduct;