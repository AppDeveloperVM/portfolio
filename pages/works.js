import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link,  Avatar, Image } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Section from '../components/section';

const Works = () => {

    return (
    <Container>
        <Section delay={0.1}>
        
        <SimpleGrid mt="10" spacing={5}>
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Trabajos
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

        <SimpleGrid columns={1} spacing={10} mt="10">
 
            <Box>
                <Heading as="h4" size="md">
                <Link href="http://www.horanova.es/" isExternal>Hora Nova ( <Link isExternal href="https://www.gruposerra.com/">Grupo Serra</Link> )</Link> - <Link href="https://www.ultimahora.es/" is External>Última Hora</Link>
                </Heading>

                <UnorderedList>
                </UnorderedList>

                <Stack variant="works-stack" direction={["column", "row"]} flex={1} spacing="24px" mt="10">
                    <Box  variant="works-box" w="auto" h="auto"  bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
                    <Link isExternal href="https://www.novaproducciones.es/#myvideo">Nova Prod</Link>
                        <Image src="https://via.placeholder.com/500x400.png/09f/fff" objectFit='contain' boxSize='auto' />
                    </Box>
                    <Box variant="works-box" w="auto" h="auto"  bg="gray.500" flexBasis={{ base: "50%", xs: "100%" }}>
                    <Link isExternal href="https://www.mallorcamagazin.com/">Mallorca Magazin</Link>
                        <Image src="https://via.placeholder.com/500x400.png/09f/fff" objectFit='cover' boxSize='auto' />
                    </Box>
                    
                </Stack>
                <Stack variant="works-stack-one" direction={["column", "row"]} flex={1} spacing="24px" mt="10">
                    
                    <Box variant="works-box" w="auto" h="auto"  bg="gray.500" flexBasis={{ base: "50%", xs: "50%" }}>
                    <Link isExternal href="https://www.clubdelsuscriptor.com/">Club del Suscrip</Link>
                        <Image src="https://via.placeholder.com/500x400.png/09f/fff" objectFit='cover' boxSize='auto' />
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Heading size="md">
                    <Link isExternal href="https://www.softline.es/web/">SoftLine Informática</Link>
                </Heading>


                <Stack variant="works-stack-one" direction={["column", "row"]} flex={1} spacing="24px" mt="10">
                    <Box  variant="works-box" w={{ base: "50%", xs: "100%" }} h="auto"  bg="gray.500" flexBasis={{base: "50%", xs: "100%"}}>
                    <Link isExternal href="https://www.softline.es/web/portfolio/view/2/peritoline-aplicacion-de-gestion-integral-de-despachos-periciales">PeritoLine App</Link>
                        <Image src="https://via.placeholder.com/500x400.png/09f/fff" objectFit='contain' boxSize='auto' />
                    </Box>
                    
                    
                </Stack>

            </Box>

        </SimpleGrid>

        </Section>
    </Container>)
}

export default Works