import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import router from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';


const PackageTier = (props: { id: number, magic? : boolean, dtype?: string, disk: number, ram: number, price: string, vCPU: number, planName: string, cpu: string }) => {
  let checked = false
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'black';
  const bgColorDark = checked ? 'purple.400' : '#7289DA';

  return (
      <Tr >
        <Td>{props.planName}</Td>
        <Td>{props.disk}GB de {props.dtype ?? "HDD"}</Td>
        <Td>{props.vCPU}vCPU</Td>
        <Td>{props.ram}GB de RAM</Td>
        <Td>{props.cpu}</Td>
        <Td>{props.magic ? "90TBPS Inline" : "Inclusa"}</Td>
        <Td>{props.price}</Td>
        <Td>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
            _hover={{}}
            onClick={() => router.push("https://dash.ryzenhost.ovh/cart.php?a=add&pid=" + props.id)}
          >
            Comprar
          </Button>
        </Td>
      </Tr>
  );
};
const VPSProduct = (props: { id: number, magic? : boolean, dtype?: string, planName: string, disk: number, ram: number, price: string, vCPU: number, cpu: string }) => {
  return (
    <PackageTier {...props} />
  );
};

export default VPSProduct;
