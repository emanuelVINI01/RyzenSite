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
export default function VPSGaming() {






    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores VPS Gaming</title>
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
                    <VPSProduct
                        id={41}
                        dtype="NVMe"
                        disk={40}
                        ram={2}
                        price={"R$15,99"}
                        vCPU={1}
                        planName={"Plano VPS Gaming 1"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={42}
                        dtype="NVMe"
                        disk={90}
                        ram={4}
                        price={"R$24,99"}
                        vCPU={1}
                        planName={"Plano VPS Gaming 2"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={43}
                        dtype="NVMe"
                        disk={100}
                        ram={8}
                        price={"R$42,99"}
                        vCPU={2}
                        planName={"Plano VPS Gaming 3"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={44}
                        dtype="NVMe"
                        disk={125}
                        ram={12}
                        price={"R$54,99"}
                        vCPU={4}
                        planName={"Plano VPS Gaming 4"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={45}
                        dtype="NVMe"
                        disk={140}
                        ram={16}
                        price={"R$64,99"}
                        vCPU={5}
                        planName={"Plano VPS Gaming 5"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={46}
                        dtype="NVMe"
                        disk={360}
                        ram={24}
                        price={"R$94,99"}
                        vCPU={6}
                        planName={"Plano VPS Gaming 6"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={47}
                        dtype="NVMe"
                        disk={450}
                        ram={32}
                        price={"R$119,99"}
                        vCPU={8}
                        planName={"Plano VPS Gaming 7"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                </Stack>
            </Box>
            <Divider />
            <Footer />
        </>
    )
}