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
                        price={"R$23,99"}
                        vCPU={1}
                        planName={"Plano VPS Gaming 1"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={42}
                        dtype="NVMe"
                        disk={90}
                        ram={4}
                        price={"R$31,99"}
                        vCPU={1}
                        planName={"Plano VPS Gaming 2"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={57}
                        dtype="NVMe"
                        disk={120}
                        ram={8}
                        price={"R$44,99"}
                        vCPU={3}
                        planName={"Plano VPS Gaming 3"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={58}
                        dtype="NVMe"
                        disk={160}
                        ram={12}
                        price={"R$56,99"}
                        vCPU={3}
                        planName={"Plano VPS Gaming 4"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={59}
                        dtype="NVMe"
                        disk={180}
                        ram={16}
                        price={"R$73,99"}
                        vCPU={4}
                        planName={"Plano VPS Gaming 5"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={60}
                        dtype="NVMe"
                        disk={200}
                        ram={24}
                        price={"R$97,99"}
                        vCPU={5}
                        planName={"Plano VPS Gaming 6"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    <Divider />
                    <VPSProduct
                        id={56}
                        dtype="NVMe"
                        disk={250}
                        ram={32}
                        price={"R$167,99"}
                        vCPU={6}
                        planName={"Plano VPS Gaming 7"}
                        cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                </Stack>
            </Box>
            <Divider />
            <Footer />
        </>
    )
}
