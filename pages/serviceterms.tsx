import { Box, Container, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
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
                <title>RyzenHosting - Termos de Serviço</title>
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
                        name={'2.1'}
                        description={'Nós garantimos um uptime de 98%.'}
                    />,
                    <SubTerm
                        key={2}
                        name={'2.2'}
                        description={'Em caso de quedas, você terá direito à 3 dias adicionais de hospedagem, desde que esta queda tenha persistido por mais de 1 dia.             '}
                    />,
                    <SubTerm
                        key={3}
                        name={'2.3'}
                        description={'O artigo 2.2 não é válido caso haja aviso prévio de manutenção em nossos servidores.'}
                    />
                ]} />
                <Term name={'Renovação'} subterms={[
                    <SubTerm
                        key={0}
                        name={'3.1'}
                        description={'Você pode realizar a renovação de nossos serviços via ticket em nosso discord, ou diretamente pelo site.'}
                    />,
                    <SubTerm
                        key={2}
                        name={'3.2'}
                        description={'Você tem até 5 dias após o vencimento para renovação, caso contrário, todos os arquivos serão deletados permanentemente.'}
                    />,
                    <SubTerm
                        key={3}
                        name={'3.3'}
                        description={'Caso haja um problema na hora da renovação, solicite mais tempo em nosso ticket do discord.'}
                    />
                ]} />
                <Term name={'Política de Reembolso'} subterms={[
                    <SubTerm
                        key={0}
                        name={'4.1'}
                        description={'Você pode realizar a renovação de nossos serviços via ticket em nosso discord, ou diretamente pelo site.'}
                    />,
                    <SubTerm
                        key={2}
                        name={'4.2'}
                        description={'Você tem até 5 dias após o vencimento para renovação, caso contrário, todos os arquivos serão deletados permanentemente.'}
                    />,
                    <SubTerm
                        key={3}
                        name={'4.3'}
                        description={'Caso haja um problema na hora da renovação, solicite mais tempo em nosso ticket do discord.'}
                    />,
                    <SubTerm
                        key={4}
                        name={'4.4'}
                        description={'Caso você tenha resgatado o domínio ou a loja, não será possível reembolsar, já que após entregá-los não é mais possível fazer o cancelamento.'}
                    />,
                    <SubTerm
                        key={5}
                        name={'4.5'}
                        description={'Não é possível reembolsar em certos meios de pagamento, como: Google Play, Skrill, PayPal, e também ALGUNS pagamentos via Pix ou Boleto.'}
                    />,
                    <SubTerm
                        key={6}
                        name={'4.6'}
                        description={'Produtos não-reembolsáveis: Dedicado, VPS, domínio.'}
                    />,
                    <SubTerm
                        key={7}
                        name={'4.7'}
                        description={'Não será possível pedir reembolso após uma renovação.'}
                    />,
                    <SubTerm
                        key={8}
                        name={'4.8'}
                        description={'Caso seu reembolso seja aprovado, nós temos até 30 dias para realizar o processo de devolução total do valor pago.'}
                    />
                ]} />
                <Term name={'Cliente'} subterms={[
                    <SubTerm
                        key={0}
                        name={'5.1'}
                        description={'O cliente deverá informar os dados de forma completa e correta no momento de cadastro em nossa plataforma.'}
                    />,
                    <SubTerm
                        key={1}
                        name={'5.2'}
                        description={'É responsabilidade do cliente qualquer erro na escrita ou na transmissão errônea dos dados.'}
                    />,
                    <SubTerm
                        key={2}
                        name={'5.3'}
                        description={'Para efetuar qualquer compra em nosso website ou adicionar produtos ao carrinho é necessário logar com o usuário e senha que foi fornecido no momento do cadastro.'}
                    />,
                    <SubTerm
                        key={3}
                        name={'5.4'}
                        description={'Usar a plataforma respeitando a ética, bons costumes, legislações e ordenamentos vigentes no país, sob pena de sofrer sanções.'}
                    />,
                    <SubTerm
                        key={4}
                        name={'5.5'}
                        description={'Se um menor de idade ou pessoa física sem capacidade plena vir a adquirir algum produto ou serviço ofertado em nossa plataforma, entenderemos que os responsáveis autorizaram, respondendo esses por toda e qualquer situação que advir, bem como pela compra.                    '}
                    />,
                    <SubTerm
                        key={5}
                        name={'5.6'}
                        description={'Não comentar ou enviar imagens nos tickets que possam ir contra a ética e o respeito, ou que tenha cunho difamatório, ofensivo, de ódio ou preconceituoso.'}
                    />,
                    <SubTerm
                        key={6}
                        name={'5.7'}
                        description={'Não fornecer qualquer informação falsa, fraudulenta ou que não seja correspondente aos seus dados.'}
                    />,
                ]} />
            </Container>

            <Divider mb={10} mt={10} />
            <FinalConsideration/>
            <Divider mb={10} />

            <Footer />
        </>
    )
}
