import { Flex, Text, Heading, VStack, Divider, useBreakpointValue, useColorModeValue, Box, IconButton, Container, Stack, SimpleGrid, Image, Badge, Thead, Table, Th, Tr, Tbody } from "@chakra-ui/react"
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
import DedicatedServer from "../src/components/DedicatedServer";

export default function Dedicated() {






    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores Dedicados</title>
            </Head>
            <Stack align={"center"} mt={10}>
                <Heading
                    fontWeight={900}
                    fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    SERVIDORES DEDICADOS
                </Heading>

            </Stack>


            <Box
                py={12}
                id={"products"}
            >


                <Table mt={10} maxH={"10xl"}>
                    <Thead>
                        <Tr p={3}>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Servidor</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Localização</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <DedicatedServer id={1} network={"500MBPS"} disk={"480GB SSD"} ram={"32GB DDR3"} price={"R$349,99"} location={"Brasil, São Paulo"} cpu={"Intel Xeon E5-2470v2 10c/20t 3.2Ghz"} />
                        <DedicatedServer id={2} network={"500MBPS"} disk={"480GB SSD"} ram={"64GB DDR3"} price={"R$469,99"} location={"Brasil, São Paulo"} cpu={"Intel Xeon E5-2470v2 10c/20t 3.2Ghz"} />
                        <DedicatedServer id={3} network={"1GBPS"} disk={"480GB SSD + 2x2TB HDD"} ram={"64GB DDR4"} price={"R$329,99"} location={"Estados Unidos, Vint Hill"} cpu={"Intel Xeon E5-1650v4 - 6c/12t - @ 3.6GHz/4GHz"} />
                        <DedicatedServer id={4} network={"1GBPS"} disk={"2x450GB NVMe"} ram={"64GB DDR4"} price={"R$399,99"} location={"Estados Unidos, Vint Hill"} cpu={"Intel Core i7-7700K OC - 4c/8t 5.0Ghz"} />
                        <DedicatedServer id={5} network={"1GBPS"} disk={"2x240GB SSD + 4x2TB HDD"} ram={"256GB DDR3"} price={"R$799,99"} location={"Estados Unidos, Vint Hill"} cpu={"Dual Xeon E5-2650v2 - 16c/32t - 3.4GHZ"} />
             
                    </Tbody>
                </Table>

            </Box>
            <Footer />
        </>
    )
}
