import {
    Stack,
    Box,
    Text,
    Container,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";
export default function Term(props: { name: string, subterms: Array<JSX.Element> }) {
    return (
        <Stack
            py={16}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}>
            <Heading
                textAlign={'center'}
                maxW={'5xl'}
                h="4"
                mb={10}
            >
                {props.name}
            </Heading>
            <Box mt={10}>
                <Accordion>
                    {props.subterms.map((term, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        {term.props.name}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {term}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}

                </Accordion>
            </Box>
        </Stack>
    )
}