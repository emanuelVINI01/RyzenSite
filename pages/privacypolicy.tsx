import { Box, Container, Divider, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Evalution from '../src/components/Evalution'
import Footer from '../src/components/Footer'
import Information from '../src/components/Information'
import RepresentProducts from '../src/components/RepresentProducts'
import Statics from '../src/components/Statics'
import FinalConsideration from '../src/components/Terms/FinalConsideration'
import SubTerm from '../src/components/Terms/SubTerm'
import Term from '../src/components/Terms/Term'
import WhyBuy from '../src/components/WhyBuy'


export default function Home() {
    return (
        <>
            <Head>
                <title>RyzenHosting - Política de Privacidade</title>
                <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
            </Head>
            <Stack spacing={0} align={'center'} mt={10} mb={10}>
                <Heading>Política de Privacidade</Heading>
            </Stack>
            <Container mt={5}>
                <Text>
                    A privacidade dos clientes é importante para nós. É política da RyzenHosting respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site RyzenHosting.
                    Solicitamos suas informações pessoais apenas quando necessário para lhe fornecer um serviço. Você sempre será informado quando elas forem coletadas, e para que serão usadas.
                    Retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenados os dados, protegemos dentro de meios comercialmente acetáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. NUNCA compartilharemos suas informações de identificação pessoal publicamente ou para terceiros, exceto em situações jurídicas.
                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                    O uso contínuo de nosso site será considerado como aceitação de nossas práticas de privacidade e informações pessoais.

                    Nosso site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência no site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.

                </Text>
            </Container>

            <Divider mb={10} mt={10} />

            <Footer />
        </>
    )
}
