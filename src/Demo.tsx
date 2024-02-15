import React from "react";
import { Box, Text, Flex, Spacer, Stack, HStack, Grid, Center, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react';

function Demo() {


    return (

        <Box h='50%' w='100%' borderWidth='2px' borderColor='red.200' padding='20px' overflow='hidden' bg='gray.200' margin='0px'>
            <HStack>
                <Text as='b' fontSize='100px' color='#4285F4'>Demo</Text>
            </HStack>

        </Box>




    )
}

export default Demo;