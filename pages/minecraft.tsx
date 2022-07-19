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


    let [brSelected, setBr] = useState(false)
    let [euaSelected, setEua] = useState(true)



    return (
        <>
            <Head>
                <title>RyzenHosting - Minecraft</title>
            </Head>
            <ProductInformation onClick={() => {
                if (document.getElementById("minecraft-eua").hidden) {
                    document.getElementById("minecraft-br").scrollIntoView({ behavior: 'smooth' })
                } else {
                    document.getElementById("minecraft-eua").scrollIntoView({ behavior: 'smooth' })
                }
            }} />
            <Divider mt={15} />
            <Box
                py={12}

            >
                <ProductDescribe title={"Comece seu servidor em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                    mt={10}
                >
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="locations">

                        <LocationCard image={"eua.png"} location_describe={"Localização Estados Unidos, Virginia."} id={"eua"} onClick={() => {
                            if (euaSelected) { return }
                            setBr(false)
                            setEua(true)
                            document.getElementById("minecraft-eua").hidden = false
                            document.getElementById("minecraft-br").hidden = true

                        }} bg={euaSelected ? "green.100" : null} />
                        <LocationCard image={"bra.jpeg"} location_describe={"Localização Brasil, São Paulo."} id={"br"} onClick={() => {
                            if (brSelected) { return }
                            setBr(true)
                            setEua(false)
                            document.getElementById("minecraft-eua").hidden = true
                            document.getElementById("minecraft-br").hidden = false

                        }} bg={brSelected ? "green.100" : null} />
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

                        <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} id="minecraft-eua">
                            <MinecraftProduct product_id={1} name={"Plano EUA 1"} price={"3,00"} ram={1} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={2} name={"Plano EUA 2"} price={"6,00"} ram={2} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={3} name={"Plano EUA 3"} price={"12,00"} ram={4} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} ranked />
                            <MinecraftProduct product_id={4} name={"Plano EUA 4"} price={"24,00"} ram={8} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={5} name={"Plano EUA 5"} price={"36,00"} ram={12} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={6} name={"Plano EUA 6"} price={"48,00"} ram={16} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={7} name={"Plano EUA 7"} price={"72,00"} ram={24} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct product_id={8} name={"Plano EUA 8"} price={"96,00"} ram={32} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />

                        </SimpleGrid>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} id="minecraft-br" hidden>
                            <MinecraftProduct product_id={38} name={"Plano BRA 1"} diskType={"SSD"} price={"5,00"} ram={1} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={39} name={"Plano BRA 2"} diskType={"SSD"} price={"10,00"} ram={2} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={40} name={"Plano BRA 3"} diskType={"SSD"} price={"20,00"} ram={4} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={41} name={"Plano BRA 4"} diskType={"SSD"} price={"40,00"} ram={8} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} ranked />
                            <MinecraftProduct product_id={42} name={"Plano BRA 5"} diskType={"SSD"} price={"60,00"} ram={12} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={43} name={"Plano BRA 6"} diskType={"SSD"} price={"80,00"} ram={16} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={44} name={"Plano BRA 7"} diskType={"SSD"} price={"120,00"} ram={24} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                            <MinecraftProduct product_id={45} name={"Plano BRA 8"} diskType={"SSD"} price={"160,00"} ram={32} ping={"de 10 a 50ms"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
                        </SimpleGrid>
                    </div>
                </Stack>

            </Box>
            <Divider />
            <Footer />
        </>
    )
}
