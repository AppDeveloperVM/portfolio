import { Container, Badge, Heading, Box, Link, List, ListItem } from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import NextLink from 'next/link'
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
        <List ml={4} my={4}></List>
        </Container>
        </Layout>
    )
}