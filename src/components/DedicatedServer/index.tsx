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


const DedicatedServer = (props: { network: string, id : number, disk: string, ram: string, price: string, location: string, cpu: string }) => {
    let checked = false
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';

    const colorTextDark = checked ? 'white' : 'black';
    const bgColorDark = checked ? 'purple.400' : '#7289DA';

    return (
        <Tr >
            <Td >DEDICADO #{props.id}</Td>
            <Td>{props.disk}</Td>
            <Td>{props.cpu}</Td>
            <Td>{props.ram}</Td>
            <Td>{props.location}</Td>
            <Td>{props.network}</Td>
            <Td>{props.price}</Td>
            <Td>
                <Button
                    size="md"
                    color={useColorModeValue(colorTextLight, colorTextDark)}
                    bgColor={useColorModeValue(bgColorLight, bgColorDark)}
                    _hover={{}}
                    onClick={() => router.push("https://discord.ryzenhost.ovh")}
                >
                    Comprar
                </Button>
            </Td>
        </Tr>
    );
};


export default DedicatedServer;