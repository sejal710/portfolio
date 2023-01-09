import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Grid,
    useColorModeValue,
    Flex,
  } from '@chakra-ui/react';

  import {RxDotFilled} from 'react-icons/rx'
  import {FcFile} from 'react-icons/fc'

export default function Project({github}) {
  return (
    <Box w={'100%'}>
    <Grid m={'auto'}>
     <Box margin={'auto'}>
       <a href={`https://github.com/sejal710?tab=repositories`}>
          <Text fontSize={'40px'} fontWeight='10px'>Project</Text>
       </a>
     </Box>
     <Box>
       <Grid gridTemplateColumns={'repeat(3,1fr)'} gap='15px'>
         {github.items.map((item, index) => <Projects key={index} {...item} />)}
       </Grid>
     </Box>
   </Grid>
       </Box>
  )
}
export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/search/repositories?q=user:sejal710+fork:true&sort=updated&per_page=8&type=Repositories`)
    let data = await res.json()
    return {
      props : {
        github :data
      } // will be passed to the page component as props
    }
  }

function Projects ({
    html_url,
    name,
    description,
    stargazers_count,
    forks_count,
    language,
  }){
    return (
      <a href={html_url}>
         <Box  maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}>
            <Grid gap='9px'>
              <Box>
                <Flex>
                  <Text fontSize={'20px'} fontWeight='15px' display={'flex'} gap='10px' justifyContent={'center'}
                  alignItems='center'>
                    <span><FcFile /></span> {name}</Text></Flex>
              </Box>
              <Box>
                <Text>{description}</Text>
              </Box>
              <Box>
                <Flex>
                <Text fontSize={'20px'} fontWeight='15px' display={'flex'} gap='10px' justifyContent={'center'}
                  alignItems='center'><span><RxDotFilled /></span>{language}</Text></Flex>
              </Box>
            </Grid>
         </Box>
      </a>
    );
       
  }
