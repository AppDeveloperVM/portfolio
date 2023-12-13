import { Container, Badge, Link,List, ListItem} from '@chakra-ui/react'
import {  ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
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
            
        </P>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Website</Meta>
                Libreria <Link href='https://leafletjs.com'>Leaflet <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
            </List>
        <WorkImage src="/images/500x400.png" alt="SpaceAvailable" mt={3}/>
        <WorkImage src="/images/500x400.png" alt="SpaceAvailable" />
        <WorkImage src="/images/500x400.png" alt="SpaceAvailable" />
        </Container>
        </Layout>
    )
}

export default Work