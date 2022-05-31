import { Box, Container, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Evalution from '../src/components/Evalution'
import Footer from '../src/components/Footer'
import Information from '../src/components/Information'
import RepresentProducts from '../src/components/RepresentProducts'
import Statics from '../src/components/Statics'
import WhyBuy from '../src/components/WhyBuy'


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
      <Divider mt={50} />
      <Statics />
      <Divider mt={50} />
      {/*
      <Box bg={useColorModeValue('gray.400', 'gray.800')}>
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
            functionemp={'C.E.O - Hyperium'} 
            describe={'Recomendo muito a Ryzen, sou cliente de lá a muito tempo, e tenho vários serviços ativos.'} photo={'https://cdn.discordapp.com/avatars/503012126596530196/f4023865eee5e4aabf97d909f15bd419.webp?size=128'} 
            name={'João Gabriel'} />
            <Evalution 
            functionemp={'C.E.O - The Ensight Corporation'} 
            describe={'Recomendo muito a RyzenHosting. Após começar a trabalhar com eles e me tornar cliente, posso falar com propriedade que é algo de qualidade. A RyzenHosting não faz overselling como outras hospedagens e garantem total qualidade em seus produtos. Recomendo que comprem com a Ryzen.'} photo={'https://cdn.discordapp.com/avatars/396049406773952512/a_c7d94f0b7502c3e992c6018b0d426383.webp?size=128'} 
            name={'Confinity'} />



          </Stack>
        </Container>
      </Box>
        */}
      <Stack spacing={0} align={'center'} mt={10} mb={10}>
            <Heading>O que dizem sobre nós</Heading>
      </Stack>  
      <Container mt={15} mb={10}>
      <Evalution
        functionemp={'C.E.O - The Ensight Corporation'}
        describe={'Recomendo muito a RyzenHosting. Após começar a trabalhar com eles e me tornar cliente, posso falar com propriedade que é algo de qualidade. A RyzenHosting não faz overselling como outras hospedagens e garantem total qualidade em seus produtos. Recomendo que comprem com a Ryzen.'} photo={'https://cdn.discordapp.com/avatars/396049406773952512/a_c7d94f0b7502c3e992c6018b0d426383.webp?size=128'}
        name={'Confinity'} />
      </Container>
      <Divider mb={10} />
      <Footer />
    </>
  )
}
