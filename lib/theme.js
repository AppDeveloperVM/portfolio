import { extendTheme } from '@chakra-ui/react'
import{ mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'page-title':{
                letterSpacing: 3
            },
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4, 
                marginTop: 3,
                marginBottom: 4,
                letterSpacing: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('black', 'grey300')(props),
            textUnderlineOffset: 3
        })
    },
    Stack: {
        variants: {
            'works-stack' : {
                justifyContent: 'center',
                alignItems: 'stretch'
            },
            'works-stack-one' : {
                alignItems: 'center'
            }
        }
    },
    Box: {
        variants: {
            'works-stack' : {
                flex: 1
            }
        }
    }
}

const fonts = {
    heading: "'Signika Negative'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, 
    styles,
    components, 
    colors, 
    fonts
})

export default theme