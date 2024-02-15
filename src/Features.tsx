import React from "react";
import { Box, Text, Flex, Spacer, Stack, VStack, HStack, Grid, Center, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react';

function Features() {


    return (

        <Box h='50%' w='100%' borderWidth='2px' borderColor='red.200' padding='20px' overflow='hidden' bg='gray.200' margin='0px'>
            <VStack display='flex' justifyContent={'center'} padding='20px'>

                <Box as='b' fontFamily='Lilita One' fontSize='80px' color='#4285F4'>Features</Box>
                <Box w='50%' as='b' fontSize='20px' color='#4285F4'
                >Our app is really cool, I promise</Box>
            </VStack>
            <HStack display='flex' justifyContent={'center'} spacing={10} paddingTop='10px'>

                <Box as='b' fontFamily='Lilita One' fontSize='20px' bg='blue.200' padding='20px' w='300px' h='300px' color='#4285F4'>Feature 1</Box>
                <Box as='b' fontFamily='Lilita One' fontSize='20px' bg='blue.200' padding='20px' w='300px' h='300px' color='#4285F4'>Feature 2</Box>
                <Box as='b' fontFamily='Lilita One' fontSize='20px' bg='blue.200' padding='20px' w='300px' h='300px' color='#4285F4'>Feature 3</Box>
            </HStack>

        </Box>




    )
}

export default Features;