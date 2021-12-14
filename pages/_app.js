import "@fontsource/signika-negative/300.css"
import { ChakraProvider } from "@chakra-ui/provider";
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from "framer-motion";
import  Layout  from "../components/layouts/main";

const Website = ({Component,pageProps,router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website