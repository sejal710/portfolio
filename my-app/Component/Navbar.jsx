import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
           <Flex gap='9px'>
           <Box><Link href='/'> Sejal Jaiswal</Link></Box>
           <Box><Link href='/Exprience' >Experience</Link></Box>
           <Box><Link href='Project'>Project</Link></Box></Flex>

         <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.githubusercontent.com/u/108399174?v=4'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.githubusercontent.com/u/108399174?v=4'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Sejal Jaiswal</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <Link href='/Project'></Link> */}
                  <MenuItem><Link href='Project'>Project</Link></MenuItem>
                  <MenuItem><Link href='/Exprience' >Experience</Link></MenuItem>
                </MenuList>
               </Menu> 
            </Stack>
          </Flex>
        </Flex> 
      </Box>
    </>
  );
}




