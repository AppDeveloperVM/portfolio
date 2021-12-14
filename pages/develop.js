import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section';
import { WorkGridItem, GridItem } from "../components/grid-item";

const Develop = () => {

    return (
    <Layout>
    <Container maxW='container.xl'>
        <Section delay={0.1}>
        
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Mi Desarrollo
        </Heading>
        <SimpleGrid mt="10" spacing={5} columns={[1]}>
        
            <WorkGridItem  id="peritoline" title="Cosplay Planning App" url="" thumbnail="/images/cosplayplanningapp_1.jpg" thumbnail_type='fill' badges={["angular","ionic","js"]} >
                App para la planificación de eventos enfocados al cosplay
            </WorkGridItem>

        </SimpleGrid>
        </Section>
    </Container>
    </Layout>
    )
}

export default Develop