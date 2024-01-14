import React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, InputBase,Tooltip, styled } from '@mui/material';
import { LocalOffer as Badge, LocationOn as Location} from '@mui/icons-material';



const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;
const StyledBadge = styled(Badge)`
    margin-right: 5px;
    color:#00CC00;
    font-size: 15px;
`;
const StyledLocation= styled(Location)`
    color:#878787;
    font-size: 22px;
`;

const TableCellDelivery = styled(Box)`
    border-bottom: 2px solid #2485f0;
    width: 40%;
`;
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`;

const ProductDetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png';

    // const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png';

    const date = new Date(new Date().getTime()+ (5*24*60*60*1000));

  return (
    <>
        <Typography> {product.title.longTitle} </Typography>
        
        <Typography style={{marginTop:5, color:'#878787', fontSize: 14 }}>8 Rating & 1 Reviews
            <Box component='span' ><img src={fassured} alt="flipkart-assured"  style={{width: 77, marginLeft: 20 }}/></Box>
        </Typography>

        <Typography>
            <Box component='span' style={{ fontSize: 28 }}>
            ₹{product.price.cost}
            </Box>&nbsp; &nbsp;
            <Box component='span' style={{color: '#878787' }}>
                <strike>₹{product.price.mrp}</strike>
            </Box>&nbsp;&nbsp;
            <Box component='span' style={{color: '#388E3C'}}>
                {product.price.discount}
            </Box>
        </Typography>

        <Typography> <StyledBadge/> Available Offers</Typography>

        <SmallText>
            <Typography> <StyledBadge/> Special PriceGet extra ₹3700 off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography> <StyledBadge/> Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography> <StyledBadge/> Bank Offer₹168 Off On SBI Credit Card Transactions T&C</Typography>
            <Typography> <StyledBadge/> No cost EMI ₹1,384/month. Standard EMI also availableView Plans </Typography>
        </SmallText>

        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}} > Delivery by {date.toDateString() } | ₹40 </TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Warranty</TableCell>
                    <TableCell>No Warranty </TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Delivery</TableCell>
                    <TableCell>
                        <TableCellDelivery>
                        <Tooltip title="Enter" arrow placement="right">

                            <StyledLocation />
                            <InputBase placeholder='Enter Delivery Pincode'>
                            </InputBase>
                            <Typography component='span' style={{ fontSize: 14, color: '#2874F0', fontWeight: 600}}> Check</Typography>
                        </Tooltip>
                        </TableCellDelivery>
                    </TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Seller</TableCell>
                    <TableCell >
                        <Box component='span' style={{color: '#2874F0'}} >
                            SuperComNet
                        </Box>
                        <SmallText >GST Invoice available</SmallText>
                        <SmallText>View More From  ₹{product.price.cost} </SmallText>
                    </TableCell>
                </ColumnText>

                <ColumnText >
                    <TableCell colSpan={2} >
                        <img src={adURL} alt="flipkartpoints" style={{width: 390}} />
                    </TableCell>
                </ColumnText>

                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>


            </TableBody>
        </Table>

    </>
  )
}

export default ProductDetails
