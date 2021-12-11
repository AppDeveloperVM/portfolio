import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import Section from '../components/section';
import { WorkGridItem, GridItem } from "../components/grid-item";

const Develop = () => {

    return (
    <Container maxW='container.xl'>
        <Section delay={0.1}>
        
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Mi Desarrollo
        </Heading>
        <SimpleGrid mt="10" spacing={5} columns={[1]}>
        
            <WorkGridItem  id="peritoline" title="Cosplay Planning App" url="https://github.com/AppDeveloperVM/cosplay-planning-app"  badges={["white", "white", "primary.700", "primary.700"]} >
                App para la planificación de eventos enfocados al cosplay
            </WorkGridItem>

        </SimpleGrid>
        </Section>
    </Container>
    )
}

export default Develop