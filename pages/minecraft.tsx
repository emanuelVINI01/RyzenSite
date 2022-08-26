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
import PlanTimeSwich from "../src/components/PlanTimeSwich";

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



    let [euaSelected, setEua] = useState(true)

    let [quartetelySelected, setQuartetely] = useState(false)


    return (
        <>
            <Head>
                <title>RyzenHosting - Minecraft</title>
            </Head>
            <ProductInformation onClick={() => {

                    document.getElementById("minecraft-eua").scrollIntoView({ behavior: 'smooth' })

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

                        <LocationCard image={"eua.png"} location_describe={"Localização Estados Unidos, Virginia. 100-150ms."} id={"eua"} onClick={() => {
                            if (euaSelected) { return }
                            setEua(true)
                            document.getElementById("minecraft-eua").hidden = false

                        }} bg={euaSelected ? "green.100" : null} />

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
                        <Stack align={"center"} mt={10} mb={10}>
                            <PlanTimeSwich setSelected={setQuartetely} isSelected={quartetelySelected} />
                        </Stack>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} id="minecraft-eua">
                            <MinecraftProduct isQuartetely={quartetelySelected} product_id={1} name={"Plano EUA 1"} price={"3,00"} priceQuartetely={"9,00"} ram={1} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} product_id={2} name={"Plano EUA 2"} price={"6,00"} priceQuartetely={"12,00"} ram={2} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"36,00"} product_id={4} name={"Plano EUA 3"} price={"12,00"} ram={4} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} ranked />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"72,00"} product_id={5} name={"Plano EUA 4"} price={"24,00"} ram={8} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"108,00"} product_id={6} name={"Plano EUA 5"} price={"36,00"} ram={12} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"144,00"} product_id={7} name={"Plano EUA 6"} price={"48,00"} ram={16} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"216,00"} product_id={8} name={"Plano EUA 7"} price={"72,00"} ram={24} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                            <MinecraftProduct isQuartetely={quartetelySelected} priceQuartetely={"288,00"} product_id={9} name={"Plano EUA 8"} price={"96,00"} ram={32} ping={"de 120 a 150ms"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />

                        </SimpleGrid>

                    </div>
                </Stack>

            </Box>
            <Divider />
            <Footer />
        </>
    )
}
