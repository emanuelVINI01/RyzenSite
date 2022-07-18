import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

function Statics() {
  return (
    <Container py={5} maxW={'container.lg'} mt={10}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'}>Estatísticas da nossa empresa</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              + de 200
            </Text>
            <Box fontSize={'sm'}>
              Clientes satisfeitos com nossos serviços!
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              + de 160
            </Text>
            <Box fontSize={'sm'}>
              Serviços ativos em nossa hospedagem!
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Statics;