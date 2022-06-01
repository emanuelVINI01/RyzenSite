import { Container, Heading, Text } from "@chakra-ui/react";

export default function SubTerm(props : { key : number, name : string, description : string} ) {
    return (
        <>
            <Container>
                <Text mt={10} mb={15} fontSize={"2xl"}>
                    {props.description}
                </Text>
            </Container>
        </>
    )
}