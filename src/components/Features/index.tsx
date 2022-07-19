import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { BsFillPlayFill } from 'react-icons/bs';
import { GiChoice } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const features = [
    {
        id: 1,
        title: 'Escolha seu plano',
        text: 'Decida o melhor plano para seu projeto e faça o pedido.',
        icon: <GiChoice />
    },
    {
        id: 2,
        title: 'Faça a compra',
        text: 'Após decidir seu plano, realize a compra, caso haja dúvidas, nós contate.',
        icon: <AiOutlineShoppingCart />
    },
    {
        id: 3,
        title: 'Comece a usar',
        text: 'Em alguns instantes após a compra seu serviço já estará ativo e pronto para uso.',
        icon: <BsFillPlayFill />
    },
]

export default function Features() {
    return (
        <Box p={4} aos-data={"fade-down"}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'} mt={5}>Inicie seu projetos em alguns segundos com os passos abaixo.</Heading>
            </Stack>

            <Container maxW={'10xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} >
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'} >
                            <Box color={'green.500'} p={3}>
                                {feature.icon}
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={700} fontSize={"2xl"}>{feature.title}</Text>
                                <Text color={'gray.600'} fontSize={"1xl"}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}