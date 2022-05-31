import {
    Box,
    Image
} from "@chakra-ui/react"
import { MouseEventHandler } from "react"

export default function LocationCard(props: { image: string, location_describe: string, id: string, onClick: MouseEventHandler, bg: string }) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' id={props.id} onClick={props.onClick}>
            <Image src={props.image} alt={"BRASIL"} />

            <Box p='6' bg={props.bg}>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {props.location_describe}
                    </Box>
                </Box>


            </Box>
        </Box>
    )
}