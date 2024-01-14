import {React, useState} from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart} from '../../redux/actions/cartActions';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({ theme}) => ({
    minWidth: '40%',
    marginRight: 20,
    padding: '40px 0 0 80px', //trbl
    [theme.breakpoints.down('lg')]:{
      padding: '20px 0 0 40px',
    }
}));
const Image = styled('img')({
    padding: '10px',
    width: '90%',
    
});
const StyledButton = styled(Button)(({ theme}) => ({
    width: '49%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]:{
      width: '46%'
    },
    [theme.breakpoints.down('sm')]:{
      width: '48%'
    },
}));
const ActionItem = ({ product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  console.log(setQuantity);

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  };

  // const buyNow = async () => {
  //   let response = await payUsingPaytm({amoutn: 500, email:'admin@admin.com'});

  //   let information = {
  //     action: 'https://securegw-stage.paytm.in/order/process',
  //     params: response
  //   }
  //   post(information);
  // }


  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px ', border: '1px solid #f0f0f0', width: '90%' }} >
        <Image src={ product.detailUrl } alt="{product.title.Title}" />
      </Box>
      <StyledButton variant='contained' style={{ marginRight: 5, background: '#ff9f00'}} onClick={() => addItemToCart() } > <Cart/>Add to Cart</StyledButton>
      <StyledButton variant='contained' /* onClick={() => buyNow() }*/ style={{background: '#FB541B' }} >  <Flash/> Buy Now</StyledButton>

    </LeftContainer>
  )
}

export default ActionItem
