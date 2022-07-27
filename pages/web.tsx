import { Flex, Text, Heading, VStack, Divider, useBreakpointValue, Box, IconButton, Container, Stack, SimpleGrid, Image, Badge, Thead, Table, Th, Tr, Tbody } from "@chakra-ui/react"
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
import Virtualization from "../src/components/Virtualization";
import PlanTimeSwich from "../src/components/PlanTimeSwich";
import CPanelProduct from "../src/components/cPanel/cPanelProduct";

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



    const [quartetely, setQuartetely] = useState(false);



    return (
        <>
            <Head>
                <title>RyzenHosting - Hospedagem de Sites</title>
            </Head>
            <ProductInformation onClick={() => {
                document.getElementById("products").scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />

            <Box
                py={12}
                id={"products"}
            >


                <ProductDescribe title={"Tenha seu site online em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack align={"center"} mt={5} mb={5}>
                    <PlanTimeSwich setSelected={setQuartetely} isSelected={quartetely} />
                </Stack>

                <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
                    <CPanelProduct disk={"30GB"} price={"9,99"} name={"Plano Starter"} domains={"1"} subdomains={"5"} id={55} quartetely={quartetely} price_quartetely={"29,99"} />
                    <CPanelProduct disk={"50GB"} price={"19,99"} name={"Plano Medium"} domains={"5"} subdomains={"10"} id={56} quartetely={quartetely} price_quartetely={"59,99"} />
                    <CPanelProduct disk={"100GB"} price={"29,99"} name={"Plano Pro"} domains={"Ilimitado"} subdomains={"Ilimitado"} id={57} quartetely={quartetely} price_quartetely={"99,99"} />
                </SimpleGrid>
            </Box>
            <Divider mt={15} />
            <Footer />
        </>
    )
}
