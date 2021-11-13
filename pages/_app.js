import "@fontsource/signika-negative/300.css"
import { ChakraProvider } from "@chakra-ui/provider";
import theme from '../lib/theme'


import  Layout  from "../components/layouts/main";

const Website = ({Component,pageProps,router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website