import { Box, Divider, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import CPanelProduct from "../src/components/cPanel/cPanelProduct";
import Footer from "../src/components/Footer";
import ProductDescribe from "../src/components/ProductDescribe";
import ProductInformation from "../src/components/ProductInformation";

export default function cPanel() {
    return (
        <>
            <Head>
                <title>RyzenHosting - Host de Sites</title>
                <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
            </Head>
            <ProductInformation scrollInto="cpanel" />
            <Divider mt={15} />
            <Box
                py={12}

            >
                <ProductDescribe title={"Crie seu site em segundos"} description={"Todos planos são atividos automaticamente."} />

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                >
                    <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={15} id="cpanel">
                        <CPanelProduct disk={"30"} price={"4,99"} name={"Plano Básico"} domains={"1"} subdomains={"5"} id={33} />
                        <CPanelProduct disk={"70"} price={"9,99"} name={"Plano Profissional"} domains={"5"} subdomains={"∞"} id={34} ranked />
                        <CPanelProduct disk={"140"} price={"14,99"} name={"Plano Mestre"} domains={"15"} subdomains={"∞"} id={35} />
                        <CPanelProduct disk={"∞"} price={"19,99"} name={"Plano Enterprise"} domains={"∞"} subdomains={"∞"} id={36} />
                    </SimpleGrid>
                </Stack>
            </Box>
            <Divider mb={10} />
            <Footer />
        </>
    )
}