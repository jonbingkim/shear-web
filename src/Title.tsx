import React from "react";
import { Box, Text, Flex, Spacer, Stack, VStack, HStack, Grid, Center, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react';

function Title() {


    return (

        <Box h='40%' w='100%' borderWidth='2px' borderColor='red.200' padding='20px' overflow='hidden' bg='gray.200' margin='0px'>

            <VStack display='flex' justifyContent={'center'}>

                <Box as='b' fontFamily='Lilita One' fontSize='100px' color='#4285F4'>Shear</Box>
                <Box w='50%' as='b' fontSize='20px' color='#4285F4'
                >A really fun application that revolutionizes everything this is just a giant wall of text to see how the spacing works with Chakra UI default settings</Box>
            </VStack>

        </Box>



    )
}

export default Title;