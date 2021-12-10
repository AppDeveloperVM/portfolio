import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar, Image } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Section from '../components/section';
import { WorkGridItem, GridItem } from "../components/grid-item";

const Works = () => {

    return (
    <Container maxW='container.xl'>
        <Section delay={0.1}>
        
            <SimpleGrid mt="10" spacing={5}>
                <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
                    Empleo
                </Heading>
            
                <Box mt="">
                    <Text>
                    Cuento con varios años de experiencia en desarrollo de páginas y apps web en diferentes empresas.
                    </Text>
                    <Text>
                    Mi formación se basa tanto en el título de técnico de grado superior, en diversos cursos privados y de igual forma mi propia formación autodidacta.
                    </Text>
                </Box>
            </SimpleGrid>


            <SimpleGrid  columns={[1]}  gap={6} spacing={10} mt="10">
    
                
                <Box>
                    <Heading as="h4" size="md" align="center" padding={3}>
                        <Link isExternal href="https://www.softline.es/web/">SoftLine Informática</Link>
                    </Heading>

                    <WorkGridItem  id="peritoline" title="PeritoLine" thumbnail="/images/Peritoline.png" url="https://www.softline.es/web/portfolio/view/2/peritoline-aplicacion-de-gestion-integral-de-despachos-periciales"  badges={["white", "white", "primary.700", "primary.700"]} >
                        App for Perito management
                    </WorkGridItem>

                </Box>
            </SimpleGrid>
            <SimpleGrid  columns={[1,1,2]}  gap={6} spacing={10} mt="10">
                <Box>
                    <Heading as="h4" size="md">
                    <Link href="http://www.horanova.es/" isExternal>Hora Nova ( <Link isExternal href="https://www.gruposerra.com/">Grupo Serra</Link> )</Link> - <Link href="https://www.ultimahora.es/" is External>Última Hora</Link>
                    </Heading>

                </Box>

            </SimpleGrid>

        </Section>
    </Container>)
}

export default Works