import {
    VStack,
    Heading,
    Text
} from "@chakra-ui/react";
import Virtualization from "../Virtualization";
export default function ProductDescribe(props: { title: string, description: string }) {
    return (
        <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize="4xl" color={"green.400"}>
                {props.title}
            </Heading>
            <Text fontSize="lg" color={'gray.500'}>
                {props.description}
            </Text>

        </VStack>
    )
}