import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Section from '../components/section';

const Works = () => {

    return (
    <Container>
        <Section delay={0.1}>
        
        <SimpleGrid mt="10" spacing={5}>
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Works
        </Heading>
       
            <Box mt="">
                <Text>
                Ive been working around 3 years in Web Development in two companies.
                This ones have multiple projects and some mobile apps.
                </Text>
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={1} spacing={10} mt="10">
 
            <Box>
                <Heading as="h4" size="md">
                <Link href="http://www.horanova.es/" isExternal>Hora Nova ( <Link isExternal href="https://www.gruposerra.com/">Grupo Serra</Link> )</Link> - <Link href="https://www.ultimahora.es/" is External>Última Hora</Link>
                </Heading>

                <UnorderedList>
                    <ListItem>
                        <Link isExternal href="https://www.novaproducciones.es/#myvideo">Nova Producciones</Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal href="https://www.mallorcamagazin.com/">Mallorca Magazin</Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal href="https://www.clubdelsuscriptor.com/">Club del Suscriptor</Link>
                    </ListItem>
                </UnorderedList>

                <Stack direction={["column", "row"]} spacing="24px" mt="10">
                    <Box w="300px" h="100px"  bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
                        
                    </Box>
                    <Box w="300px" h="100px" bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
                       
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Heading size="md">
                    <Link isExternal href="https://www.softline.es/web/">SoftLine Informática</Link>
                </Heading>

                <UnorderedList>
                    <ListItem>
                        <Link isExternal href="https://www.softline.es/web/portfolio/view/2/peritoline-aplicacion-de-gestion-integral-de-despachos-periciales">PeritoLine App</Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal href="https://www.mallorcamagazin.com/">Mallorca Magazin</Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal href="https://www.clubdelsuscriptor.com/">Club del Suscriptor</Link>
                    </ListItem>
                </UnorderedList>
            </Box>

        </SimpleGrid>

        </Section>
    </Container>)
}

export default Works