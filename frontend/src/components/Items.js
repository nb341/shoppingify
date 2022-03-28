import React from 'react'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import Item from './Item'
const Items = () => {
  return (
            <Wrap ml={{base: "64px", lg: "175px"}} h={"100vh"} overflowY="scroll" spacing={6}>
                <WrapItem>
                    <Item item={[]}/>
                </WrapItem>
                <WrapItem>
                    <Item/>
                </WrapItem>
            </Wrap>
  )
}

export default Items