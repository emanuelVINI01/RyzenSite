import { Box, Container, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Evalution from '../src/components/Evalution'
import Footer from '../src/components/Footer'
import Information from '../src/components/Information'
import RepresentProducts from '../src/components/RepresentProducts'
import Statics from '../src/components/Statics'
import SubTerm from '../src/components/Terms/SubTerm'
import Term from '../src/components/Terms/Term'
import WhyBuy from '../src/components/WhyBuy'


export default function Home() {
    return (
        <>
            <Head>
                <title>RyzenHosting - Início</title>
                <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
            </Head>
            <Stack spacing={0} align={'center'} mt={10} mb={10}>
                <Heading>Termos de Serviço</Heading>
            </Stack>
            <Container mt={5}>
                <Term name={'Arquivos'} subterms={[
                    <SubTerm
                    key={0} 
                    name={'1.1'} 
                    description={'Nós protegemos seus dados e arquivos com criptografia ponta a ponta, porém, eles são de total responsabilidade do cliente.'} 
                    />,
                    <SubTerm 
                    key={2} 
                    name={'1.2'} 
                    description={'Não nos responsabilizamos por perdas, independentemente da situação. Recomendamos que coloque uma senha forte, ative a verificação de duas etapas disponível em nosso painel e faça backup diariamente.'} 
                    />,
                    <SubTerm 
                    key={3} 
                    name={'1.3'} 
                    description={'Não acessamos dados dos servidores de nenhum de nossos usuários sem consentimento.'} 
                    />
                ]} />
                <Divider />
                <Term name={'Downtime'} subterms={[
                    <SubTerm
                    key={0} 
                    name={'1.1'} 
                    description={'Nós garantimos um uptime de 98%.'} 
                    />,
                    <SubTerm 
                    key={2} 
                    name={'1.2'} 
                    description={'Em caso de quedas, você terá direito à 3 dias adicionais de hospedagem, desde que esta queda tenha persistido por mais de 1 dia.             '} 
                    />,
                    <SubTerm 
                    key={3} 
                    name={'1.3'} 
                    description={'O artigo 2.2 não é válido caso haja aviso prévio de manutenção em nossos servidores.'} 
                    />
                ]} />
                <Term name={'Renovação'} subterms={[
                    <SubTerm
                    key={0} 
                    name={'1.1'} 
                    description={'Você pode realizar a renovação de nossos serviços via ticket em nosso discord, ou diretamente pelo site.'} 
                    />,
                    <SubTerm 
                    key={2} 
                    name={'1.2'} 
                    description={'Você tem até 5 dias após o vencimento para renovação, caso contrário, todos os arquivos serão deletados permanentemente.'} 
                    />,
                    <SubTerm 
                    key={3} 
                    name={'1.3'} 
                    description={'Caso haja um problema na hora da renovação, solicite mais tempo em nosso ticket do discord.'} 
                    />
                ]} />
                                <Term name={'Política de Reembolso'} subterms={[
                    <SubTerm
                    key={0} 
                    name={'1.1'} 
                    description={'Você pode realizar a renovação de nossos serviços via ticket em nosso discord, ou diretamente pelo site.'} 
                    />,
                    <SubTerm 
                    key={2} 
                    name={'1.2'} 
                    description={'Você tem até 5 dias após o vencimento para renovação, caso contrário, todos os arquivos serão deletados permanentemente.'} 
                    />,
                    <SubTerm 
                    key={3} 
                    name={'1.3'} 
                    description={'Caso haja um problema na hora da renovação, solicite mais tempo em nosso ticket do discord.'} 
                    />
                ]} />
            </Container>

            <Divider mb={10} />

            <Footer />
        </>
    )
}
