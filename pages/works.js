import { Container,Box,Heading, Text, SimpleGrid,Link } 
from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";

const Works = () => {

    return (
    <Layout>
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

                    <WorkGridItem  title="PeritoLine" thumbnail="/images/Peritoline_.png" url="https://www.softline.es/web/portfolio/view/2/peritoline-aplicacion-de-gestion-integral-de-despachos-periciales"  badges={["js","php","symfony"]} >
                        App para la gestión de peritajes
                    </WorkGridItem>

                </Box>
            </SimpleGrid>

            <Heading as="h4" size="md" align="center" padding={3} mt="10">
                <Link href="http://www.horanova.es/" isExternal>Hora Nova ( <Link isExternal href="https://www.gruposerra.com/">Grupo Serra</Link> )</Link> - <Link href="https://www.ultimahora.es/" is External>Última Hora</Link>
            </Heading>
            <SimpleGrid  columns={[1,1,2]}  gap={6} spacing={10}   >
             
                <WorkGridItem title="Club del suscriptor" thumbnail="/images/Clubdelsuscriptor_.png" url="https://www.clubdelsuscriptor.com" badges={[]} >
                    Web dedicada a los eventos de un grupo selecto
                </WorkGridItem>

                <WorkGridItem title="Nova Producciones" thumbnail="/images/novaProducciones.png" url="https://www.novaproducciones.es" >
                    División de audio visuales del Grupo Serra
                </WorkGridItem>

            </SimpleGrid>

            <SimpleGrid  columns={[1]}  gap={6} spacing={10} mt="10">
                <Box>
                    <Heading as="h4" size="md" align="center" padding={3}>
                        <Link isExternal href="https://sece.com/">SECE | Smart Lightning & City Technologies</Link>
                    </Heading>

                    <WorkGridItem  title="PeritoLine" thumbnail="/images/suiphos.jpeg" url="https://sece.com/servicios/software/"  badges={["js","angularJS"]} >
                        SUIPHOS | Smart urban control system
                    </WorkGridItem>

                </Box>
            </SimpleGrid>

            <SimpleGrid  columns={[1]}  gap={6} spacing={10} mt="10">
                <Box>
                    <Heading as="h4" size="md" align="center" padding={3}>
                        <Link isExternal href="https://www.holacons.com/">Hola Consultora</Link>
                    </Heading>

                    <WorkGridItem  title="HolaCons" thumbnail="/images/volotea.png" url="https://www.volotea.com/es/"  badges={["js","angular2+"]} >
                        Volotea web apps
                    </WorkGridItem>

                </Box>
            </SimpleGrid>

        </Section>
    </Container>
    </Layout>
    )
}

export default Works