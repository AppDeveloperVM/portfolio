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
                        Víc Maree R.
                    </Heading>
                    <p>
                        FrontEnd Developer 
                    </p>    
                             
                </Box>
                <Box flexGrow={1}>
                    <Avatar direction="right" mr={10} size="xl" name="Víc M" src="/images/profile_image.jpg" />
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

    <Section delay={0.1} mt={10}>
        <Heading as="h3" variant="section-title">
            Sobre mi
        </Heading>

        <Paragraph>
                Víctor es un joven desarrollador residente en Terrasa ( Cataluña ), 
                con pasión por hacer de la tecnología una compañera que solucione los problemas cotidianos.
                Le gusta experimentar con todo lo relacionado del mundo web y descubrir nuevas formas de optimizar el trabajo.<br/>
                En su tiempo libre, le encanta salir a pasear con sus patines en línea e ir al cine.
        </Paragraph>

        <NextLink href='/works'>
            <Button colorScheme='teal' size='sm' mt="5" rightIcon={<ChevronRightIcon/>}>
            Portfolio
            </Button>
        </NextLink>

    </Section>
    <Section delay={0.2}>

        <Heading as="h3" variant="section-title" mt={8}>
            Bio
        </Heading>

        <BioSection>
        <BioYear>1994</BioYear>
        Nacido en Mallorca
        </BioSection>
        <BioSection>
        <BioYear>2016</BioYear>
        Terminados estudios de grado superior en Desarrollo de apps Web
        </BioSection>
        <BioSection>
        <BioYear>2016</BioYear>
        Trabajado en SoftLine Informática
        </BioSection>
        <BioSection>
        <BioYear>2018</BioYear>
        Trabajado en Hora Nova S.A.
        </BioSection>
        <BioSection>
        <BioYear>2019 hasta actualidad</BioYear>
        Continuado sus estudios en desarrollo web y apps móviles
        </BioSection>

    </Section>
    <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={8}>
            Contacto
        </Heading>

        <Heading as="h4" size="md">
            ¿Renovar la imagen de tu empresa? ¿Desarrollar una nueva página web?
        </Heading>
        <Heading as="h4" size="lg" mt="3">
            Yo puedo ayudarte!
        </Heading>

            <Button href="mailto:vicmr1994@gmail.com?subject=Propuesta%20de%20desarrollo%20web&body=Estoy%20interesado%20en%20pedir%20presupuesto%20para%20un%20proyecto%20web" colorScheme='teal' size='sm' mt="5" rightIcon={<EmailIcon/>}>
            Pongámonos en Contacto <IconButton aria-label="email" icon={<EmailIcon/>} bg={useColorModeValue('gray.300','#313134')} /> 
            </Button>
      
    </Section>
    </Container> 
    </Layout>
    )
    
}



export default Page