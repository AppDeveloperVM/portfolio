import { Container,Box,Heading } from "@chakra-ui/react"
const Page = () => {


    return (
    <Container>
        <Box borderRadius="lg" bg="grey" p={3} align="center">
        <div>Hello,Im a web developer</div>
        </Box>
        
        <Box display={{ md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Víc Maree R
                </Heading>
            </Box>
        </Box>
    </Container> 
    )
    
}

export default Page