import { Box, Divider, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import CPanelProduct from "../src/components/cPanel/cPanelProduct";
import RevendaCPanelProduct from "../src/components/cPanel/RevendaCPanel";
import Footer from "../src/components/Footer";
import ProductDescribe from "../src/components/ProductDescribe";
import ProductInformation from "../src/components/ProductInformation";

export default function cPanelRevenda() {
    return (
        <>
            <Head>
                <title>RyzenHosting - Revenda Host de Sites</title>
                <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
            </Head>
            <ProductInformation scrollInto="cpanel" />
            <Divider mt={15} />
            <Box
                py={12}

            >
                <ProductDescribe title={"Revenda hospedagem cPanel a custos baixos"} description={"Todos planos são atividos automaticamente."} />

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                >
                    <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={15} id="cpanel">
                        <RevendaCPanelProduct disk={"100"} price={"24,99"} name={"Revenda Starter"} id={37} users={"40"} transfer={1000} />
                        <RevendaCPanelProduct disk={"250"} price={"39,99"} name={"Revenda Maker"} id={38} users={"75"} transfer={5000}/>
                        <RevendaCPanelProduct disk={"400"} price={"44,99"} name={"Revenda Pro"} id={39} users={"150"} transfer={10000} ranked/>
                        <RevendaCPanelProduct disk={"∞*"} price={"59,99"} name={"Revenda Max"} id={40} users={"∞"} transfer={"∞"}/>
                    </SimpleGrid>
                </Stack>
            </Box>
            <Divider mb={10} />
            <Footer />
        </>
    )
}