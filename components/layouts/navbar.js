import NextLink from 'next/link';
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Link,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HumburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whileAlpha.900')
    return (
        <NextLink href="href">
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            >
            {children}    
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path} = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
           <Container display="flex"
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        -
                    </Heading>
                </Flex>

                <Stack
                direction={{ base:'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                        </LinkItem>

                    <LinkItem href="/develop" path={path}>
                        Personal Development
                        </LinkItem>
                </Stack>
                <ThemeToggleButton />
            </Container>
        </Box>
    )
}

export default Navbar