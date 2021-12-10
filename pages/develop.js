import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import Section from '../components/section';

const Develop = () => {

    return (
    <Container maxW='container.xl'>
        <Section delay={0.1}>
        
        <SimpleGrid mt="10" spacing={5}>
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Mi Desarrollo
        </Heading>

        <Stack direction={["column", "row"]} spacing="24px" mt="10">
            <Box w="250px" h="400px"  bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
            </Box>
            <Box w="250px" h="400px"  bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
            </Box>
        </Stack>

        </SimpleGrid>
        </Section>
    </Container>
    )
}

export default Develop