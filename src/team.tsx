

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Image,
  useColorModeValue,
  Container,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/react';
// import ahuHeadshot from "../ahu.jpg"
import githubimg from '../public/pngwing.com.png';
import linkedinimg from '../public/thereallinkedin.png';
import ahu from './images/ahu.jpeg'
import caleb from './images/caleb.jpg'
import ari from './images/ari.jpg'
import jon from './images/jon.png'



const TeamMemberCard = ({
  name,
  role,
  githubLink,
  linkedinLink,
  profileImg,
  githubImg = githubimg,
  linkedinImg = linkedinimg,
}) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      overflow={'hidden'}
      
      p={5}
      textAlign={'center'}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
      width={"230px"}
      height={"340px"} 
      display="flex"
      flexDirection="column"
      justifyContent="space-around" 
    >
      <Avatar
        size="1xl" 
        src={profileImg}
        alt={name}
        mb={4}
        mx="auto"
        borderColor="white"
        borderWidth={3}
      />
      <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
        {name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={2}>
        {role}
      </Text>
      <Stack direction={'row'} spacing={4} justifyContent={'center'}>
        <Link href={githubLink} isExternal>
          <Image boxSize="50px" src={githubImg} alt="GitHub" />
        </Link>
        <Link href={linkedinLink} isExternal>
          <Image boxSize="50px" src={linkedinImg} alt="LinkedIn" />
        </Link>
      </Stack>
    </Box>
  );
};



const Team = () => {
  return (
    <Container maxW={'7xl'} py={12}>
      <Box textAlign={'center'} h='10vh' mb={12}>
        <Heading fontSize={'5xl'} color={useColorModeValue('gray.800', 'white')} fontWeight={'bold'}>
          Team
        </Heading>
        <Text fontSize={'xl'} color={'grey.700'}>
          Meet our amazing team!
        </Text>
      </Box>

      <Flex wrap="wrap" justifyContent="center" alignItems="center" gap="20px">
        {/* Add your TeamMemberCard components here, all in a single row, with `role` prop as "Software Engineer" and `profileImg` for the circular image */}
        <TeamMemberCard
          role="Software Engineer"
          name="Albert Hu"
          profileImg={ahu}
          githubLink="https://github.com/albhu24"
          linkedinLink="https://www.linkedin.com/in/hu-albert/"
          githubImg={githubimg}
          linkedinImg={linkedinimg}
        />
        <TeamMemberCard
        role="Software Engineer"
          name="Ari Anguiano"
          profileImg={ari}
          githubLink="https://github.com/crispulum"
          linkedinLink="https://www.linkedin.com/in/ari-anguiano"
          githubImg={githubimg}
          linkedinImg={linkedinimg}
        />
        <TeamMemberCard
        role="Software Engineer"
          name="Jonathan Kim"
          profileImg={jon}
          githubLink="https://github.com/jonbingkim"
          linkedinLink="www.linkedin.com/in/jonbkim"
          githubImg={githubimg}
          linkedinImg={linkedinimg}
        />
        <TeamMemberCard
        role="Software Engineer"
          name="Caleb Kao"
          githubLink="https://github.com/caleb-kao"
          linkedinLink="https://www.linkedin.com/in/calebkao/"
          profileImg={caleb}
          githubImg={githubimg}
          linkedinImg={linkedinimg}
        />
        <TeamMemberCard
        role="Software Engineer"
          name="Dinesh Wijesekara"
          githubLink="https://github.com/Dwijesek"
          linkedinLink="https://www.linkedin.com/in/hu-albert/"
          githubImg={githubimg}
          linkedinImg={linkedinimg}
        />
      </Flex>
    </Container>
  );
};

export default Team;
