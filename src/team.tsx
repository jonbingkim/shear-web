import React from "react";
import { Box, Center,  Flex, Heading } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import githubimg from '../public/pngwing.com.png'
import linkedinimg from '../public/thereallinkedin.png'



const Team = () => {
  return (
    <div>
    <Text fontSize='50px' color='tomato' align='center' fontWeight='bold'>
 Team
</Text>
  <HStack spacing='50px' justify='center' align='center'>
    <Flex justify='center' textAlign='center' alignContent='center' >
    <Card align='center'>
 <CardHeader fontSize='40px' fontWeight='bold'>
  Albert Hu
 </CardHeader>
 <CardBody>

 </CardBody>
 <CardFooter>
  <Link href="https://github.com/albhu24">
  <Image height={'30px'} width={'30px'} src={githubimg}/>
  </Link>
 <Link href= "https://www.linkedin.com/in/hu-albert/">
 <Image height={'28px'} width={'28px'} src={linkedinimg}/>
 </Link>
  </CardFooter>
</Card>
    </Flex>

    <Flex justify='center' textAlign='center' alignContent='center' >
    <Card align='center'>
<CardHeader fontSize='40px' fontWeight='bold'>
  Ari Anguiano
 </CardHeader>
 <CardBody>
  
  </CardBody>
  <CardFooter>
  <Link href="https://github.com/crispulum">
  <Image height={'30px'} width={'30px'} src={githubimg}/>
  </Link>
 <Link href= "https://www.linkedin.com/in/ari-anguiano-70b395293/">
 <Image height={'28px'} width={'28px'} src={linkedinimg}/>
 </Link>
  </CardFooter>
</Card>
</Flex>

<Flex justify='center' textAlign='center' alignContent='center' >
<Card align='center'>
<CardHeader fontSize='40px' fontWeight='bold'>
  Caleb Kao
 </CardHeader>
 <CardBody>
  
  </CardBody>
  <CardFooter>
  <Link href="https://github.com/caleb-kao">
  <Image height={'30px'} width={'30px'} src={githubimg}/>
  </Link>
 <Link href= "https://www.linkedin.com/in/calebkao">
 <Image height={'28px'} width={'28px'} src={linkedinimg}/>
 </Link>
  </CardFooter>
</Card>
</Flex>

<Flex justify='center' textAlign='center' alignContent='center' >
<Card align='center'>
<CardHeader fontSize='40px' fontWeight='bold'>
  Dinesh W
 </CardHeader>
 <CardBody>
  
  </CardBody>
  <CardFooter>
  <Link href="https://github.com/Dwijesek">
  <Image height={'30px'} width={'30px'} src={githubimg}/>
  </Link>
 <Link href= "https://www.linkedin.com/in/hu-albert">
 <Image height={'28px'} width={'28px'} src={linkedinimg}/>
 </Link>
  </CardFooter>
</Card>
</Flex>


<Flex justify='center' textAlign='center' alignContent='center' >
<Card align='center'>
<CardHeader fontSize='40px' fontWeight='bold'>
  Jonathan Kim
 </CardHeader>
 <CardBody>
  
  </CardBody>
  <CardFooter>
  <Link href="https://github.com/jonbingkim">
  <Image height={'30px'} width={'30px'} src={githubimg}/>
  </Link>
 <Link href= "http://www.linkedin.com/in/jonbkim">
 <Image height={'28px'} width={'28px'} src={linkedinimg}/>
 </Link>
  </CardFooter>
</Card>
</Flex>

</HStack>
</div>
  )
}

export default Team;