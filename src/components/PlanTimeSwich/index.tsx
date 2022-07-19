import { Stack, Switch, Text } from "@chakra-ui/react"

export default function PlanTimeSwich(props: {
    setSelected: any
    isSelected: boolean
}) {
    return (
        <Stack align='center' direction='row'>
            <Text>
                {props.isSelected ? "Trimensal" : "Mensal"}
            </Text>
            <Switch size='lg' onChange={(e) => {
                props.setSelected(e.target.checked)
            }}/>
        </Stack>
    )
}