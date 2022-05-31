import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function WhyBuy() {

    return (
            <Container maxW={'5xl'} py={12} >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading>Nossa empresa</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Surgimos em agosto de 2021, com hospedagem de servidores de Minecraft, hoje temos vários outros serviços, confira!
                        </Text>
                        <Stack
                            spacing={6}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Qualidade e Segurança'}
                            />
                            <Feature
                                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Entrega Rápida'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'Equipe Treinada'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'airfor.svg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
    );
}