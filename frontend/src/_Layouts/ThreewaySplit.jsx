import React from 'react';
import { Sidebar } from '../components/Sidebar';
import Items from '../components/Items';
import { Box } from '@chakra-ui/react';
const ThreewaySplit = ({panelRight, Content, panelLeft}) => {
  return (
    <Box display={"flex"}>
        {/* Sidebar panelRight */}
        <Box bg="white" height={'100vh'} display={'flex'} flexDirection={'column'} position="fixed" left={0} justifyContent="space-between" p={3} alignItems="center" boxShadow={"sm"} w={{base: "62px",lg: "94px"}} zIndex={"1"}> 
            {panelLeft}
        </Box>
        {/* Content Section */}
        <Box w="calc(100vw - 389px)" ml={{base: "64px", lg: "175px"}}>
            {Content}
        </Box>
        {/* panelLeft */}
        <Box>
            {panelRight}
        </Box>
    </Box>
  )
}

export default ThreewaySplit