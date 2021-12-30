import { Container,Heading, SimpleGrid } 
from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";

const Develop = () => {

    return (
    <Layout>
    <Container maxW='container.xl'>
        <Section delay={0.1}>
        
        
        <Heading as="h3" variant="section-title" size="md" textDecoration="underline">
            Mi Desarrollo
        </Heading>
        <SimpleGrid mt="10" spacing={5} columns={[1]}>
        
            <WorkGridItem  id="cosplanningapp" title="Cosplay Planning App" url="" thumbnail="/images/cosplayplanningapp_1.jpg" thumbnail_type='fill' badges={["angular","ionic","js"]} >
                App para la planificación de eventos enfocados al cosplay
            </WorkGridItem>

            <WorkGridItem  id="spaceavailable" title="Space Available" url="" thumbnail="/images/spaceAvailable1.png" thumbnail_type='contain' badges={["angular","ionic","js", "leaflet"]} >
                App para la búsqueda de establecimientos con disponibilidad.
            </WorkGridItem>

            <WorkGridItem  id="dfplayerminimp3" title="DFPlayerMini MP3" url="" thumbnail="/images/dfplayermini_mp3_1.jpg" thumbnail_type='contain' badges={["arduino"]} >
                Proyecto reproductor mp3 minimalista.
            </WorkGridItem>

        </SimpleGrid>
        </Section>
    </Container>
    </Layout>
    )
}

export default Develop