import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link, Avatar, useColorModeValue } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Section from '../components/section';
import Paragraph from '../components/paragraph';

const Page = () => {

    return (
    <Container>
        <Box borderRadius="lg" bg="teal.700" p={3} mb={6} align="center" mt={2}>
        <Text fontWeight="bold" color="gray.800"> &lt;p&gt; Hello, I'm a Web developer &lt;/p&gt; </Text>
        </Box>
        
        <Box display={{ md: 'flex'}}>
            <SimpleGrid columns={2} spacing={10}>
                <Box flexGrow={1}>
                
                    <Heading as="h2" variant="page-title">
                        Víc Maree R
                    </Heading>
   
                   
                    <p>
                        Full Stack Developer 
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
                    <IconButton aria-label="GitHub" icon={<BsGithub />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>

            <Box
            as="button">
                <Link href="https://www.linkedin.com/in/víctor-maree-redondo-476a91136/" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsLinkedin />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>
        </HStack>

    <Section delay={0.1} mt={10}>
        <Heading as="h3" variant="section-title">
            Introduction
        </Heading>

        <Paragraph>
            Paragraph
        </Paragraph>
        
    </Section>
    </Container> 
    )
    
}

export default Page