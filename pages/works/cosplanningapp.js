import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {  ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Cosplay Planning App" >
        <Container mt={4}>
        <Title>
        CosPlanningApp <Badge>2021</Badge>
        </Title>
        <P>
            Aplicación enfocada en la gestión de eventos relacionados con el Cosplay,
            tanto en el desarrollo del personaje, como reuniones con otros cosplayers y planificación de sesiones de fotos.
        </P>
        <List ml={4} my={4}>
            <ListItem>
                <Link href=''>CosPlanningApp <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
        </List>
        <WorkImage src="/images/500x400.png" alt="CosPlanningApp" />
        </Container>
        </Layout>
    )
}

export default Work