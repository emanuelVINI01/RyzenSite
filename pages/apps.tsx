import { Flex, Text, Heading, VStack, Divider, useBreakpointValue, Box, IconButton, Container, Stack, SimpleGrid, Image, Badge } from "@chakra-ui/react"
import Footer from "../src/components/Footer"
import MinecraftInformation from "../src/components/ProductInformation"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Slider from 'react-slick'
import Head from "next/head";
import ProductInformation from "../src/components/ProductInformation";
import MinecraftProduct from "../src/components/Minecraft/MinecraftProduct";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import ApplicationProduct from "../src/components/ApplicationProduct";

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
}
export default function Minecraft() {


    let [pySelected, setPy] = useState(false)
    let [jsSelected, setJs] = useState(true)



    return (
        <>
            <Head>
                <title>RyzenHosting - Aplicações</title>
            </Head>
            <ProductInformation onClick={() => {
                if (pySelected)
                    document.getElementById("py").scrollIntoView({ behavior: 'smooth' })
                else
                    document.getElementById("js").scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />
            <Box
                py={12}

            >
                <ProductDescribe title={"Hospede sua aplicações em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                    mt={10}
                >
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="langs">

                        <LocationCard image={"py.png"} location_describe={"Aplicações escritas na linguagem Python."} id={"py"} onClick={() => {
                            if (pySelected) { return }
                            setJs(false)
                            setPy(true)
                            document.getElementById("py-prod").hidden = false
                            document.getElementById("js-prod").hidden = true

                        }} bg={pySelected ? "green.100" : null} />
                        <LocationCard image={"js.png"} location_describe={"Aplicações escritas na linguagem JavaScript."} id={"js"} onClick={() => {
                            if (jsSelected) { return }
                            setJs(true)
                            setPy(false)
                            document.getElementById("py-prod").hidden = true
                            document.getElementById("js-prod").hidden = false

                        }} bg={jsSelected ? "green.100" : null} />
                    </SimpleGrid>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                >
                    <div>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} spacing={5} id="py-prod">
                            <ApplicationProduct product_id={19} name={"Plano Python 1"} price={"2,50"} ram={"512MB"} disk={2.5} />
                            <ApplicationProduct product_id={20} name={"Plano Python 2"} price={"5,00"} ram={"1GB"} disk={5} ranked />
                        </SimpleGrid>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} spacing={5} id="js-prod" hidden>
                            <ApplicationProduct product_id={17} name={"Plano JavaScript 1"} price={"2,50"} ram={"512MB"} disk={2.5} />
                            <ApplicationProduct product_id={18} name={"Plano JavaScript 2"} price={"5,00"} ram={"1GB"} disk={5} ranked />
                        </SimpleGrid>
                    </div>
                </Stack>

            </Box>
            <Divider />
            <Footer />
        </>
    )
}