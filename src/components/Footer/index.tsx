import { ReactNode } from 'react';

import {
  Box,
  Container,
  Divider,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Image src="ryzen.png" width="100px" alt="Logo da RyzenHosting" />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Ryzen Hosting. Todos direitos reservados.
              </Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Produtos</ListHeader>
              <Link href={'/minecraft'}>Minecraft</Link>
              <Link href={'/apps'}>Aplicações</Link>
              <Link href={'/vps'}>VPS Xeon</Link>
              <Link href={'/vpsgaming'}>VPS Gaming</Link>
              <Link href={'/cpanel'}>Host de Sites</Link>
              <Link href={'/cpanelrevenda'}>Revenda cPanel</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Links Úteis</ListHeader>
              <Link href={'https://discord.ryzenhost.ovh'}>Contato</Link>
              <Link href={'https://dash.ryzenhost.ovh/login.php'}>Login</Link>
              <Link href={'https://dash.ryzenhost.ovh/register.php'}>Registro</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Paineis de Controle</ListHeader>
              <Link href={'https://painel.ryzenhost.ovh'}>Painel</Link>
              <Link href={'https://cloud.ryzenhost.ovh:4083'}>Cloud</Link>
              <Link href={'https://gaming.ryzenhost.ovh'}>Cloud Gaming</Link>
              <Link href={'https://cpanel.ryzenhost.ovh:2083'}>cPanel</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Termos e Políticas de Uso</ListHeader>
              <Link href={'/serviceterms'}>Termos de Serviço</Link>
              <Link href={'/privacypolicy'}>Política de Privacidade</Link>
            </Stack>


          </SimpleGrid>
        </Container>
      </Box>
      <Divider />
    </>
  );
}