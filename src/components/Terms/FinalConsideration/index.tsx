import { Container, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";

export default function FinalConsideration() {
    return (
        <>
            <Stack spacing={0} align={'center'} mt={10} mb={10}>
                <Heading>Considerações Finais</Heading>
            </Stack>
            <Container mt={10}>
                <List>
                    <ListItem mt={3} mb={3}>
                        <Text mt={10} align={"center"} mb={15} fontSize={"2xl"}>
                            A falha do cliente em conhecer ou seguir qualquer dos termos/políticas acima é passível de desativação da conta.
                        </Text>
                    </ListItem>
                    <ListItem mt={3} mb={3}>
                        <Text mt={10} mb={15} align={"center"}  fontSize={"2xl"}>
                            A RyzenHosting será a árbitra exclusiva para definir a constituição da violação dos termos e políticas.
                        </Text>
                    </ListItem>
                    <ListItem mt={3} mb={3}>
                        <Text mt={10} mb={15} align={"center"}  fontSize={"2xl"}>
                            A RyzenHosting reserva-se ao direito de remover qualquer conta sem aviso antecedente.
                        </Text>
                    </ListItem>
                    <ListItem mt={3} mb={3}>
                        <Text mt={10} mb={15} align={"center"}  fontSize={"2xl"}>
                        Quando a RyzenHosting tomar conhecimento da violação de uma regra, nós iniciaremos uma investigação. Durante a investigação, a RyzenHosting poderá restringir o acesso do cliente para garantir a legitimidade dos dados.
                        </Text>
                    </ListItem>
                    <ListItem mt={3} mb={3}>
                        <Text mt={10} mb={15} align={"center"} small fontSize={"1xl"}>
                        A última edição neste documento ocorreu em 30 de Maio de 2022
                        </Text>
                    </ListItem>

                </List>
            </Container>
        </>
    )
}