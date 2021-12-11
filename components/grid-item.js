import { Global } from "@emotion/react"
import { Box, Text, LinkBox, LinkOverlay,Badge } from "@chakra-ui/react"
import NextLink from 'next/link'
import Image from 'next/image'


export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image 
            src={thumbnail}
            
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy" 
            blurDataURL="/500x400.png/09f/fff"
            width="600px" height="400px"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail, url, badges  }) => (
    <Box w="100%" align="center">
        <NextLink href={url}>
            <LinkBox cursor="pointer">
                <Image src={ thumbnail!=null ?  thumbnail  : '/images/500x400.png' }
                    alt={title} className="grid-item-thumbnail" 
                    placeholder="blur" blurDataURL="/500x400.png/09f/fff" width="600px" height="400px" objectFit='cover'
                />
                
                <LinkOverlay href={url}>
                    <Text mt={2} fontSize={20} >
                        {title}
                    </Text>
                    { badges.map((badge) => (
                        <><Badge>{badge}</Badge> </>
                  ))
                }
                </LinkOverlay>
                
                <Text fontSize={14} >{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)