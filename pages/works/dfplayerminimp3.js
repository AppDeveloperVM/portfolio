import { Container, Badge } from '@chakra-ui/react'

import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="DFPlayerMini MP3" >
        <Container mt={4}>
        <Title>
        DFPlayerMini MP3 <Badge>2021</Badge>
        </Title>
        <P>
            Proyecto desarrollado enteramente en Arduino sobre la creación de un MP3 minimalista.
        </P>
        <WorkImage src="/images/dfplayermini_mp3_1.jpg" alt="DFPlayerMini" />
        <WorkImage src="/images/dfplayermini_mp3_2.jpg" alt="DFPlayerMini" />
        <WorkImage src="/images/dfplayermini_mp3_3.jpg" alt="DFPlayerMini" size={'100%'} />
        </Container>
        </Layout>
    )
}

export default Work