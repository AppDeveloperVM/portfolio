import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Page = () => {


    return (
    <Container>
        <Box borderRadius="lg" bg="teal" p={3} mb={6} align="center">
        <Text color="white">Hello,Im a web developer</Text>
        </Box>
        
        <Box display={{ md: 'flex'}}>
            <SimpleGrid columns={2} spacing={10}>
                <Box flexGrow={1}>
                
                    <Heading as="h2" variant="page-title">
                        Víc Maree R
                    </Heading>
   
                   
                    <p>
                        Web Developer 
                    </p>
                    
                </Box>
                <Box flexGrow={1}>
                    <Avatar direction="right" mr={10} size="xl" name="Víc M" src="https://bit.ly/dan-abramov" />
                </Box>
            </SimpleGrid>
        </Box>
        <HStack>
            <Box
            as="button">
                <Link href="https://github.com/AppDeveloperVM" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsGithub />} /> 
                </Link>
            </Box>

            <Box
            as="button">
                <Link href="https://www.linkedin.com/in/víctor-maree-redondo-476a91136/" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsLinkedin />} /> 
                </Link>
            </Box>
        </HStack>

        <SimpleGrid>
        <Center bg="#AFEBF6">
        <Heading as="h3" size="xl" color="white">
            Work
        </Heading>
        </Center>
        
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

            <Center bg="#AFEBF6">
            <Heading as="h3" size="xl" color="white">
                Personal Development
            </Heading>
            </Center>

        </SimpleGrid>



    </Container> 
    )
    
}

export default Page