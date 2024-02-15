import React from 'react';
import { Box, SimpleGrid, Icon, Text, VStack, Heading, extendTheme,ChakraProvider} from '@chakra-ui/react';
import { FiDatabase, FiActivity, FiDollarSign, FiShield } from 'react-icons/fi';

// Feature component
const Feature = ({ icon, title, description }) => (
  <VStack
    spacing={4} 
    align="center"
    maxW="md" 
  >
    <Icon as={icon} boxSize={16} /> 
    <Text fontWeight="semibold" fontSize="xl">{title}</Text> 
    <Text textAlign="center" noOfLines={2} fontSize="lg">{description}</Text> 
  </VStack>
);

// Features grid component
const Features = () => {


const theme = extendTheme({
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
    });
  return (
    <ChakraProvider theme={theme}>
    <Box p={12} h="80vh"> {/* Increased padding */}
      <VStack spacing={8} align="center" mb={10}>
        <Heading as="h2" fontSize="5xl">Features</Heading>
        <Text textAlign="center" fontSize="xl" maxWidth="container.md" h="75px">
          Here are the highlights of some features Shear offers.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, null, 2]} spacing={12}> 
       <Feature
          icon={FiShield}
          title="Secure Deployment"
          description="Deploy securely with a platform built on a security-first approach to protect your data."
        />
        <Feature
          icon={FiActivity}
          title="Actionable Graphs"
          description="Gain actionable insights with our interactive and informative graphs, tailored to your data."
        />
        <Feature
          icon={FiDollarSign}
          title="Run Time Cost Analysis"
          description="Control your budget with detailed analyses of runtime costs and actionable saving strategies."
        />
    
        <Feature
          icon={FiDatabase}
          title="Persistent Storage"
          description="Efficiently store and retrieve data with robust persistent storage solutions, optimized for high availability."
        />
      </SimpleGrid>
    </Box>
    </ChakraProvider>
  );
};

export default Features;
