import { Container,Box,Heading, Text,ListItem ,UnorderedList, SimpleGrid,Center, Stack, HStack, Icon,Button,IconButton,Link, Avatar, useColorModeValue } 
from "@chakra-ui/react"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import InfoJobsLogo from '../components/infojobs-icon';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import CodeWriting from "../components/code-writing";


const Page = () => {

    return (
    <Container maxW='container.xl'>
        <Box borderRadius="lg" bg="teal.700" p={3} mb={6} align="center" mt={2}>
        <Text id="txt" fontWeight="bold" color="gray.800"> <CodeWriting/>  </Text>
        </Box>

        
        
        <Box  >
            <SimpleGrid columns={2} spacing={10}>
                <Box flexGrow={1}>
                
                    <Heading as="h2" variant="page-title">
                        Víc Maree R.
                    </Heading>
                    <p>
                        Full Stack Developer 
                    </p>    
                             
                </Box>
                <Box flexGrow={1}>
                    <Avatar direction="right" mr={10} size="xl" name="Víc M" src="/images/profile_image.jpg" />
                </Box>
            </SimpleGrid>
        </Box>
        <HStack mb={10} columns={1,2}>
            <Box
            >
                <Link href="https://github.com/AppDeveloperVM" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsGithub />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>

            <Box
            >
                <Link href="https://www.linkedin.com/in/víctor-maree-redondo-476a91136/" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsLinkedin />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>
            <Box
            >
                <Link href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=16280012787186252343" isExternal>
                    <IconButton aria-label="InfoJobs" icon={<InfoJobsLogo />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>
        </HStack>

    <Section delay={0.1} mt={10}>
        <Heading as="h3" variant="section-title">
            Sobre mi
        </Heading>

        <Paragraph>
            
        </Paragraph>
        
    </Section>
    </Container> 
    )
    
}



export default Page