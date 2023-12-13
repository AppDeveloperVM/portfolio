import { Container,Box,Heading, Text, SimpleGrid,HStack, Button,IconButton,Link, Avatar, useColorModeValue } 
from "@chakra-ui/react"
import NextLink from 'next/link'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import InfoJobsLogo from '../components/infojobs-icon';
import Section from '../components/section';
import Paragraph from '../components/paragraph'
import CodeWriting from "../components/code-writing";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from '../components/bio'
import { WorkGridItem } from "../components/grid-item";


const Page = () => {

    return (
    <Layout>
    <Container maxW='container.xl'>
        <Box borderRadius="lg" bg="teal.600" p={3} mb={6} align="center" mt={2}>
        <Text id="txt" fontWeight="bold" color="gray.800"> <CodeWriting/>  </Text>
        </Box>

        
        <Box>
            <SimpleGrid columns={2} spacing={10}>
                <Box flexGrow={1}>
                
                    <Heading as="h2" variant="page-title" letterSpacing="5px">
                        Elia Moliner
                    </Heading>
                    <p>
                        Illustrator
                    </p>    
                             
                </Box>
                <Box flexGrow={1}>
                    <Avatar direction="right" mr={10} size="xl" name="Víc M" src="/images/500x400.png" />
                </Box>
            </SimpleGrid>
        </Box>
        <HStack mb={10} columns={3} mt={3}>
            <Box>
                <Link href="https://github.com/AppDeveloperVM" variant="concealed" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsGithub />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>

            <Box>
                <Link href="https://www.linkedin.com/in/víctor-maree-redondo-476a91136/" variant="concealed" isExternal>
                    <IconButton aria-label="GitHub" icon={<BsLinkedin />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>
            <Box>
                <Link href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=16280012787186252343" variant="concealed" isExternal>
                    <IconButton aria-label="InfoJobs" icon={<InfoJobsLogo />} bg={useColorModeValue('gray.300','#313134')} /> 
                </Link>
            </Box>
        </HStack>

    <SimpleGrid  columns={[1]}  gap={6} spacing={10} mt="10">
        <Box>
            <WorkGridItem title="" thumbnail="/images/500x400.png" url="https://www.softline.es/web/portfolio/view/2/peritoline-aplicacion-de-gestion-integral-de-despachos-periciales" >
            </WorkGridItem>
        </Box>
    </SimpleGrid>

    <SimpleGrid  columns={[1,1,2]}  gap={6} spacing={10} mt="20"> 
        <WorkGridItem title="" thumbnail="/images/Clubdelsuscriptor_.png" url="https://www.clubdelsuscriptor.com" >
        </WorkGridItem>

        <WorkGridItem title="" thumbnail="/images/novaProducciones.png" url="https://www.novaproducciones.es" >
        </WorkGridItem>
    </SimpleGrid>

    <SimpleGrid  columns={[1,1,2]}  gap={6} spacing={10}>   
        <WorkGridItem title="" thumbnail="/images/Clubdelsuscriptor_.png" url="https://www.clubdelsuscriptor.com" >
        </WorkGridItem>

        <WorkGridItem title="" thumbnail="/images/novaProducciones.png" url="https://www.novaproducciones.es" >
        </WorkGridItem>
    </SimpleGrid>

    <SimpleGrid  columns={[1,1,2]}  gap={6} spacing={10}>
        <WorkGridItem title="" thumbnail="/images/Clubdelsuscriptor_.png" url="https://www.clubdelsuscriptor.com" >
        </WorkGridItem>

        <WorkGridItem title="" thumbnail="/images/novaProducciones.png" url="https://www.novaproducciones.es" >
        </WorkGridItem>
    </SimpleGrid>

    <Section delay={0.1} mt={10}>
        <Heading as="h3" variant="section-title">
            Mis trabajos
        </Heading>

        <Paragraph>
            
        </Paragraph>

        <NextLink href='/works'>
            <Button colorScheme='teal' size='sm' mt="5" rightIcon={<ChevronRightIcon/>}>
            Portfolio
            </Button>
        </NextLink>

    </Section>

    
    <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={8}>
            Contacto
        </Heading>

        <Link isExternal href="mailto:vicmr1994@gmail.com?subject=Propuesta%20de%20desarrollo%20web&body=Estoy%20interesado%20en%20pedir%20presupuesto%20para%20un%20proyecto%20web" passHref>
            <Button  colorScheme='teal' size='sm' mt="5" rightIcon={<EmailIcon/>}>
            Pongámonos en Contacto  
            </Button>
        </Link> 

    </Section>
    </Container> 
    </Layout>
    )
    
}



export default Page
