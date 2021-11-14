import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import Section from '../components/section';

const Develop = () => {

    return (
    <Container>
        <Section delay={0.1}>
        
        <SimpleGrid mt="10" spacing={5}>
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Development
        </Heading>

        </SimpleGrid>
        </Section>
    </Container>
    )
}

export default Develop