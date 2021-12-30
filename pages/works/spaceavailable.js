import { Container, Badge, Link} from '@chakra-ui/react'
import {  ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Space Available" >
        <Container mt={4}>
        <Title>
        SpaceAvailable <Badge>2021</Badge>
        </Title>
        <P>
            Aplicación enfocada en la búsqueda de establecimientos con disponibilidad apta para su visita.
            Uso de recomendaciones y lugares cercanos.
            Libreria  <Link href='https://leafletjs.com'>Leaflet <ExternalLinkIcon mx="2px"/></Link>
        </P>
        <WorkImage src="/images/spaceAvailable1.jpg" alt="SpaceAvailable" mt={3}/>
        <WorkImage src="/images/spaceAvailable2.png" alt="SpaceAvailable" />
        <WorkImage src="/images/spaceAvailable3.jpg" alt="SpaceAvailable" />
        </Container>
        </Layout>
    )
}

export default Work