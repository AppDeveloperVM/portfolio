import "@fontsource/exo-2/300.css"

import { ChakraProvider } from "@chakra-ui/provider";
//import theme from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    //think about dark / light mode
    fonts: {
        heading: "Exo 2",
    }
})


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