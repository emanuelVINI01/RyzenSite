import { Flex, Text, Heading, VStack, Divider, useBreakpointValue, Box, IconButton, Container, Stack, SimpleGrid, Image, Badge, Tbody, TableContainer, Table, Thead, Th, TableCaption, Tr } from "@chakra-ui/react"
import Footer from "../src/components/Footer"
import MinecraftInformation from "../src/components/ProductInformation"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import router, { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick'
import Head from "next/head";
import ProductInformation from "../src/components/ProductInformation";
import MinecraftProduct from "../src/components/Minecraft/MinecraftProduct";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import ApplicationProduct from "../src/components/ApplicationProduct";
import VPSProduct from "../src/components/VPSProduct";
import Virtualization from "../src/components/Virtualization";


const EuaVPSs = (
    <>
        <VPSProduct id={12} disk={40} ram={2} price={"R$21,99"} vCPU={1} planName={"#1"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={13} disk={70} ram={4} price={"R$29,99"} vCPU={2} planName={"#2"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={14} disk={100} ram={8} price={"R$43,99"} vCPU={4} planName={"#3"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={15} disk={150} ram={12} price={"R$59,99"} vCPU={6} planName={"#4"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={16} disk={200} ram={16} price={"R$73,99"} vCPU={8} planName={"#5"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={17} disk={360} ram={24} price={"R$99,99"} vCPU={12} planName={"#6"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={18} disk={490} ram={32} price={"R$134,99"} vCPU={14} planName={"#7"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={19} disk={600} ram={48} price={"R$184,99"} vCPU={16} planName={"#8"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={20} disk={800} ram={64} price={"R$229,99"} vCPU={16} planName={"#9"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
        <VPSProduct id={22} disk={1600} ram={128} price={"R$349,99"} vCPU={16} planName={"#11"} cpu={"Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz"} />
    </>
)
const BraVPSs = (
    <>
        <VPSProduct magic id={48} disk={40} ram={2} price={"R$27,99"} vCPU={1} planName={"#1"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={49} disk={70} ram={4} price={"R$39,99"} vCPU={2} planName={"#2"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={50} disk={100} ram={8} price={"R$59,99"} vCPU={4} planName={"#3"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={51} disk={120} ram={12} price={"R$73,99"} vCPU={6} planName={"#4"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={52} disk={150} ram={16} price={"R$87,99"} vCPU={8} planName={"#5"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={53} disk={200} ram={24} price={"R$119,99"} vCPU={12} planName={"#6"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
        <VPSProduct magic id={54} disk={225} ram={32} price={"R$189,99"} vCPU={14} planName={"#7"} cpu={"Intel(R) Xeon(R) E5-2470v2 @ 3.20GHz"} />
    </>
)

export default function VPS() {


    const [isEUA, setEUA] = useState(true)

    const productsRef = useRef<HTMLDivElement>()

    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores VPS</title>
            </Head>
            <ProductInformation virt onClick={() => {
                if (productsRef.current) productsRef.current.scrollIntoView({ behavior: 'smooth' })
            }} />
            <Divider mt={15} />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                overflow={"auto"}
                mt={10}
                mb={10}
            >
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="locations">

                    <LocationCard
                        image={"eua.png"}
                        location_describe={"Localização Estados Unidos, Virginia."}
                        id={"eua"}
                        bg={isEUA ? "green.100" : ""} onClick={() => {
                            setEUA(true)
                        }} />
                    <LocationCard
                        image={"bra.jpeg"}
                        location_describe={"Localização Brasil, São Paulo."}
                        bg={!isEUA ? "green.100" : ""}
                        id={"bra"} onClick={() => {
                            setEUA(false)
                        }}
                    />
                </SimpleGrid>
            </Stack>




            <ProductDescribe title={"Tenha seu sistema online em segundos"} description={"Tenha seu serviço em instantes."} />


            <Box ref={productsRef}>
                <Table mt={10}>
                    <Thead>
                        <Tr>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Plano</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Núcleos de CPU</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Proteção Anti-DDoS</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {isEUA ? EuaVPSs : BraVPSs}
                    </Tbody>
                </Table>
            </Box>


            <Footer />
        </>
    )
}
