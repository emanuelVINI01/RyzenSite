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
            <ProductInformation virt onClick={() => {
                document.getElementById("products").scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />

            <Box
                py={12}
                id={"products"}
            >


                <ProductDescribe title={"Tenha seu sistema online em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Table mt={10}>
                    <Thead>
                        <Tr p={3}>
                        <Th fontWeight={900} color={"white"} fontSize={"lg"}>Plano</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Núcleos de CPU</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Proteção Anti-DDoS</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <VPSProduct
                            id={23}
                            dtype="NVMe"
                            disk={40}
                            ram={2}
                            price={"R$23,99"}
                            vCPU={1}
                            planName={"#1"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        <VPSProduct
                            id={24}
                            dtype="NVMe"
                            disk={90}
                            ram={4}
                            price={"R$32,99"}
                            vCPU={1}
                            planName={"#2"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        <VPSProduct
                            id={25}
                            dtype="NVMe"
                            disk={120}
                            ram={8}
                            price={"R$49,99"}
                            vCPU={3}
                            planName={"#3"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        <VPSProduct
                            id={26}
                            dtype="NVMe"
                            disk={160}
                            ram={12}
                            price={"R$63,99"}
                            vCPU={3}
                            planName={"#4"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        <VPSProduct
                            id={35}
                            dtype="NVMe"
                            disk={180}
                            ram={16}
                            price={"R$94,99"}
                            vCPU={4}
                            planName={"#5"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                        <VPSProduct
                            id={27}
                            dtype="NVMe"
                            disk={200}
                            ram={24}
                            price={"R$144,99"}
                            vCPU={5}
                            planName={"#6"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />

                        <VPSProduct
                            id={28}
                            dtype="NVMe"
                            disk={250}
                            ram={32}
                            price={"R$189,99"}
                            vCPU={6}
                            planName={"#7"}
                            cpu={"Intel(R) Core(R) I7 7700k @ 5.00GHz"} />
                    </Tbody>
                </Table>

            </Box>
            <Footer />
        </>
    )
}
