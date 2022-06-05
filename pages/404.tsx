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
            <Box 
            textAlign="center" 
            py={10} 
            px={6}
            mt={10}
            >
                <Heading
                    display="inline-block"
                    as="h1"
                    size="2xl"
                    backgroundClip="text"
                    color={"white"}
                    >
                    404
                </Heading>
                <Text color={'gray.500'} mb={10} mt={10} size={"5xl"}>
                    Ops! Eu não encontrei essa página
                </Text>

                <Button
                    colorScheme="gray"
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