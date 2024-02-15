import React from "react";
import { Box, Text, Grid, Flex, Spacer, Stack, HStack, GridItem, Center, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react';

function Header() {


    return (

        <Box h='12%' w='100%' borderWidth='2px' borderColor='red.200' padding='20px' overflow='hidden' bg='gray.200' margin='0px'>
            <HStack>
                <Text as='b' fontSize='60px' color='#4285F4'>Logo</Text>
                <Spacer />
                <Grid templateColumns='repeat(5, 1fr)' gap={0} w='40%'>
                    <GridItem fontSize='20px' fontFamily='Lilita One' h='10'  >Features</GridItem>
                    <GridItem fontSize='20px' fontFamily='Lilita One' h='10'  >Docs</GridItem>
                    <GridItem fontSize='20px' fontFamily='Lilita One' h='10'  >Linkedin</GridItem>
                    <GridItem fontSize='20px' fontFamily='Lilita One' h='10'  >GitHub</GridItem>
                    <GridItem fontSize='20px' fontFamily='Lilita One' h='10'  >Team</GridItem>
                </Grid>
            </HStack>

        </Box>




    )
}

export default Header;