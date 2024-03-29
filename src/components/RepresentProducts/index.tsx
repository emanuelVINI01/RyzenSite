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
    Image,
    SimpleGrid,
    Container,
    Icon
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { MdSettingsApplications } from 'react-icons/md';

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

export default function RepresentProducts() {
    const router = useRouter()
    return (
        <Box id="rp" data-aos={"fade-up"}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" color={"green.400"}>
                    Comece seu projeto em segundos
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Tenha reembolso em até 7 dias.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <SimpleGrid columns={[1, 1, 1, 1, 2, 3]} alignItems={"center"} spacing={20} id="cpanel">
                    
       
                    <PriceWrapper>
                        <Box position="relative">

                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl" color="green.300">
                                    Minecraft
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600" >
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900" color="#7289DA">
                                        3,00
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /mês
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
                                        Seu servidor sempre online.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Localizações no Brasil e nos Estados Unidos.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Suporte a MCPE.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Jogadores ilimitados.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Sub-domínios gratuitos
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Suporte a mods e BungeeCord.
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red" onClick={() => { router.push("/minecraft") }}>
                                        Configurar
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Box position="relative">
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl" color="green.300">
                                    Servidores VPS
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600" >
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900" color="#7289DA">
                                        18,99
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /mês
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
                                        Seu VPS sempre online
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Localizações no Brasil e nos Estados Unidos
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Acesso SSH root
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        IPv4 dedicado
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Privacidade garantida
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Painel de controle Virtualizor
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red" onClick={() => { router.push("/vps") }}>
                                        Configurar
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Box position="relative">
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl" color="green.300">
                                    Hospedagem de Sites
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600" >
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900" color="#7289DA">
                                        9,99
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /mês
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
                                        Seu site sempre online
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Localizado nós Estados Unidos
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Certificado SSL (https) gratuito
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Tráfego ilimitado
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Disco SSD NVMe
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Painel de controle cPanel
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red" onClick={() => { router.push("/web") }}>
                                        Configurar
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                </SimpleGrid>
            </Stack>
        </Box>
    );
}
