import { Box, Link, Wrap, WrapItem, Tooltip, Image, Circle , Text} from "@chakra-ui/react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ReplayIcon from '@mui/icons-material/Replay';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import Logo from '../shared/logo.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const Sidebar = (props) => {
    return(
        <>
            
            <Image src={Logo} mt={5}/>
            
            <Wrap direction="column" spacing={8}>
                <WrapItem>
                    <Tooltip label='Items' placement='right' hasArrow size="sm" borderRadius="md" fontWeight="600" ml={3}>
                        <Link color="gray.600"><FormatListBulletedIcon style={{fontSize: "24px"}}/></Link>
                    </Tooltip>
                </WrapItem>
                <WrapItem>
                    <Tooltip label='History' placement='right' hasArrow size="sm" borderRadius="md" fontWeight="600" ml={3}>
                        <Link color="gray.600"><ReplayIcon style={{fontSize: "24px"}}/></Link>
                    </Tooltip>
                </WrapItem>
                <WrapItem>
                    <Tooltip label='Statistics' placement='right' hasArrow size="sm" fontWeight="600" borderRadius="md" ml={3}>
                        <Link color="gray.600" ><InsertChartOutlinedTwoToneIcon style={{fontSize: "24px"}}/></Link>
                    </Tooltip>
                </WrapItem>
            </Wrap>

            <Box mb={5}>
                    <Circle bg="#F9A109" color={'white'} size={42}>
                        <ShoppingCartOutlinedIcon />
                    </Circle>
                    <Box position="relative" bg="#EB5757" top={'-46px'} left="28px" boxSize={"19px"} zIndex={1} borderRadius="md" color="white" align="center"><Text fontSize="12px" fontWeight="700" >3</Text></Box>
            </Box>

        </>
    )
}