import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const IMAGE =
    '404.svg';



export default function NotFound() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>RyzenHosting - Não Encontrado</title>
            </Head>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h1"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text color={'gray.500'} mb={100} mt={100} size={"5xl"}>
                    Ops! Eu não encontrei essa página
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    onClick={() => { router.push("/") }}
                >
                    Voltar ao início
                </Button>
            </Box>
        </>
    );
}