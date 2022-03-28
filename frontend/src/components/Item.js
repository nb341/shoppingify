import React from 'react';
import { Button, Text, Box, Flex } from '@chakra-ui/react';
import AddIcon from '@mui/icons-material/Add';
const Item = () => {
  return (
    <Box px={"16px"} py={"15px"} w={{base: "140px", lg: "182px"}} bgColor="white" color="gray.800" boxShadow="0px 2px 12px rgba(0, 0, 0, 0.05)" size="lg" borderRadius={"lg"} display={"flex"} justifyContent={"space-between"}><Text as={"p"}>Avocados</Text> <Box as="span" color={"gray.200"}><AddIcon/></Box></Box>
  )
}

export default Item