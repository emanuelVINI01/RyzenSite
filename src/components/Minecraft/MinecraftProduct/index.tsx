import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    IconButton,
    Image,
    useBreakpointValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function MinecraftProduct(props: {
    product_id : number,
    name : string,
    price : string, 
    priceQuartetely : string, 
    ram : number,
    ranked?: boolean,
    isQuartetely?: boolean,
    ping : string,
    cpu : string,
    diskType? : string
}) {

    const router = useRouter()
    const bg = useColorModeValue('red.300', 'red.700')
    const color = useColorModeValue('gray.900', 'gray.300')
    return (
        <Box py={0}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={7}>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            {props.ranked ? <Text
                                textTransform="uppercase"
                                bg={bg}
                                px={3}
                                py={1}
                                color={color}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Mais Popular
                            </Text> : null}
                        </Box>

                        <Box py={2} px={7}>
                            <Text fontWeight="500" fontSize="2xl" color="green.300">
                                <Image
                                    src={props.ram + ".png"}
                                    mb={5}
                                    mx={"auto"}
                                />
                                {props.name}
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600" >
                                    R$
                                </Text>
                                <Text fontSize="5xl" fontWeight="900" color="green.300">
                                    {props.isQuartetely ? props.priceQuartetely : props.price}
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    {!props.isQuartetely ? "/mês" : "/trimestre"}
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Seu servidor sempre online
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Ping {props.ping}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {props.ram}GB de RAM
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {props.ram * 5}GB de {props.diskType || "HDD"}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Suporte a MCPE
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Jogadores ilimitados
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Sub-domínios gratuitos
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Suporte a mods, BungeeCord e plugins.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {props.cpu}
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" onClick={() => { router.push("https://dash.ryzenhost.ovh/cart.php?a=add&pid=" + props.product_id + (props.isQuartetely ? "&billingcycle=quartetely" : "")) }}>
                                    Comprar
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}
