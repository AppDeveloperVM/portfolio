import { Container,Box,Heading, SimpleGrid, HStack, Icon,Button,IconButton,Link,  Avatar } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Page = () => {


    return (
    <Container>
        <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
        <div>Hello,Im a web developer</div>
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

    </Container> 
    )
    
}

export default Page