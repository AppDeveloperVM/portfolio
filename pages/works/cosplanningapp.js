import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {  ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Inkdrop">
        <Container>
        <Title>
        CosPlanningApp <Badge>2021</Badge>
        </Title>
        <P>
            Cos Planning App
        </P>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Website</Meta>
                <Link href=''>CosPlanningApp <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
        </List>
        <WorkImage src="/images/cosplayplanningapp_1.jpg" alt="CosPlanningApp" />
        </Container>
        </Layout>
    )
}

export default Work