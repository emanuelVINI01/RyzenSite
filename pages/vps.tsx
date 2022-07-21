import { Flex, Text, Heading, VStack, Divider, useBreakpointValue, Box, IconButton, Container, Stack, SimpleGrid, Image, Badge } from "@chakra-ui/react"
import Footer from "../src/components/Footer"
import MinecraftInformation from "../src/components/ProductInformation"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import Slider from 'react-slick'
import Head from "next/head";
import ProductInformation from "../src/components/ProductInformation";
import MinecraftProduct from "../src/components/Minecraft/MinecraftProduct";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import ApplicationProduct from "../src/components/ApplicationProduct";
import VPSProduct from "../src/components/VPSProduct";

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
export default function VPS() {






    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores VPS</title>
            </Head>
            <ProductInformation onClick={() => {
                document.getElementById("products").scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                overflow={"auto"}
                mt={10}
            >
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="locations">

                    <LocationCard image={"eua.png"} location_describe={"Localização Estados Unidos, Virginia."} id={"eua"} bg={"green.100"} onClick={() => {

                    }} />
                    <LocationCard image={"bra.jpeg"} location_describe={"Localização Brasil, São Paulo."} id={"br"} onClick={() => {
                        router.push("https://discord.ryzenhost.ovh")

                    }} bg={null} />
                </SimpleGrid>
            </Stack>

            <Box
                py={12}

            >


                <ProductDescribe title={"Tenha seu sistema online em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack spacing={4} width={'100%'} direction={'column'} mt={10} id={"products"}>
                    <Divider />
                    <VPSProduct id={12} disk={40} ram={2} price={"R$21,99"} vCPU={1} planName={"Plano VPS 1"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={13} disk={70} ram={4} price={"R$29,99"} vCPU={2} planName={"Plano VPS 2"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={14} disk={100} ram={8} price={"R$43,99"} vCPU={4} planName={"Plano VPS 3"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={15} disk={150} ram={12} price={"R$59,99"} vCPU={6} planName={"Plano VPS 4"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={16} disk={200} ram={16} price={"R$73,99"} vCPU={8} planName={"Plano VPS 5"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={17} disk={360} ram={24} price={"R$99,99"} vCPU={12} planName={"Plano VPS 6"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={18} disk={490} ram={32} price={"R$134,99"} vCPU={14} planName={"Plano VPS 7"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={19} disk={600} ram={48} price={"R$184,99"} vCPU={16} planName={"Plano VPS 8"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={20} disk={800} ram={64} price={"R$229,99"} vCPU={16} planName={"Plano VPS 9"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                    <Divider />
                    <VPSProduct id={22} disk={1600} ram={128} price={"R$349,99"} vCPU={26} planName={"Plano VPS 11"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
                </Stack>
            </Box>
            <Divider />
            <Footer />
        </>
    )
}
