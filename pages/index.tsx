
import { Box, Container, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Evalution from '../src/components/Evalution'
import Footer from '../src/components/Footer'
import Information from '../src/components/Information'
import RepresentProducts from '../src/components/RepresentProducts'
import Statics from '../src/components/Statics'
import WhyBuy from '../src/components/WhyBuy'

import Features from '../src/components/Features'



export default function Home() {
  return (
    <>
      <Head>
        <title>RyzenHosting - Início</title>
        <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
      </Head>
      <Information />
      <RepresentProducts />
      <Divider mt={20} mb={20} />
      <WhyBuy />
      <Divider mt={30} />
      <Statics />
      <Divider mt={30} />
      <Features />
      <Box bg={useColorModeValue('gray.200', 'gray.800')} data-aos={"fade-down"} >
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>O que dizem sobre nós</Heading>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Evalution
              functionemp={'C.E.O - The Ensight Corporation'}
              describe={'Recomendo muito a RyzenHosting. Após começar a trabalhar com eles e me tornar cliente, posso falar com propriedade que é algo de qualidade. A RyzenHosting não faz overselling como outras hospedagens e garantem total qualidade em seus produtos. Recomendo que comprem com a Ryzen.'} photo={'https://cdn.discordapp.com/avatars/396049406773952512/a_c7d94f0b7502c3e992c6018b0d426383.webp?size=128'}
              name={'Confinity'} />
            <Evalution
              functionemp={'C.E.O - Wolves'}
              describe={'Recomendo bastante a RyzenHosting, possui um ótimo suporte, hosts baratas e que valem apena, cada centavo que gastei do meu bolso renovando a host foi a melhor escolha que tive, a RyzenHosting possui uma qualidade em seus produtos muito grande, após começar a ser um cliente deles nunca tive problemas com nenhum produtos e nem com atendimento! Super recomendo que façam suas compras na RyzenHosting.'} photo={'https://cdn.discordapp.com/attachments/985861706272096296/987694135194554389/unknown.png'}
              name={'Lowercase'} />
            <Evalution
              functionemp={'C.E.O - Optimize Team'}
              describe={'Após muito tempo na ryzen hosting, o desempenho mudou muito em questão de performace, tenho o plano revenda da i7 recomendo muito realmente superaram minhas expectativas e conseguiram ganhar minha confiança, um ótimo suporte e foi a minha primeira máquina da minha empresa, então tive uma experiencia diferenciada, realmente mudaram minha rotina a cada dia, obrigado ryzen hosting.'}
              photo={'https://cdn.discordapp.com/icons/895266471196913665/46ce2bda2b19ad4f55975527cd8b6160.webp?size=128'}
              name={'Nuno '} />



          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

