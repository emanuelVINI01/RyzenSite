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
export default function MinecraftGaming() {


    let [quartetelySelected, setQuartetely] = useState(false)

    return (
        <>
            <Head>
                <title>RyzenHosting - Minecraft Gaming</title>
            </Head>
            <ProductInformation onClick={() => {
                document.getElementById("minecraft").scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />
            <Box
                py={12}

            >
                <ProductDescribe title={"Comece seu servidor em segundos"} description={"Planos Gaming com processadores i7 para alta perfomance."} />
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
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} id="minecraft">
                            <MinecraftProduct priceQuartetely={"12,00"} isQuartetely={quartetelySelected} product_id={30} name={"Plano EUA Gaming 1"} diskType={"NVMe"} price={"4,00"} ram={1} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"24,00"} isQuartetely={quartetelySelected} product_id={31} name={"Plano EUA Gaming 2"} diskType={"NVMe"} price={"8,00"} ram={2} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"48,00"} isQuartetely={quartetelySelected} product_id={32} name={"Plano EUA Gaming 3"} diskType={"NVMe"} price={"16,00"} ram={4} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"96,00"} isQuartetely={quartetelySelected} product_id={33} name={"Plano EUA Gaming 4"} diskType={"NVMe"} price={"32,00"} ram={8} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"114,00"} isQuartetely={quartetelySelected} product_id={34} name={"Plano EUA Gaming 5"} diskType={"NVMe"} price={"48,00"} ram={12} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} ranked  />
                            <MinecraftProduct priceQuartetely={"192,00"} isQuartetely={quartetelySelected} product_id={35} name={"Plano EUA Gaming 6"} diskType={"NVMe"} price={"64,00"} ram={16} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"288,00"} isQuartetely={quartetelySelected} product_id={36} name={"Plano EUA Gaming 7"} diskType={"NVMe"} price={"96,00"} ram={24} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                            <MinecraftProduct priceQuartetely={"384,00"} isQuartetely={quartetelySelected} product_id={37} name={"Plano EUA Gaming 8"} diskType={"NVMe"} price={"128,00"} ram={32} ping={"de 120 a 150ms"} cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        </SimpleGrid>
                    </div>
                </Stack>

            </Box>
            <Divider />
            <Footer />
        </>
    )
}
