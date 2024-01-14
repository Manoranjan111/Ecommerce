import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Box, Typography, Button, styled} from '@mui/material';

//CUSTOM COMPONENT IMPORT
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';


const Container = styled(Grid)(({theme}) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')] : {
    padding: '15px 10px',
  }
}));
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const ButtonWrapper = styled(Box) (({theme}) => ({
  padding: '10px 20px',
  background: '#fff',
  boxShadow: '0 -2px 10px 0 rgba(0 0 0 / 10%)',
  border: '1px solid #f0f0f0',
  [theme.breakpoints.down('md')] : {
    padding: 0,
  } 
}));
const StyledButton = styled(Button) (({theme}) => ({
  display: 'flex',
  marginLeft: 'auto',
  background: '#FB641D',
  color: '#fff',
  width: 250,
  height: 51,
  borderRadius: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));
const LeftComponent = styled(Grid)(({theme}) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
    marginBottom: 15,
    paddingRight: 0,
  }
}));


const Cart = () => {

  const { cartItems } = useSelector(state => state.cart); 
  return (
    <>
      {
        cartItems.length ?
          <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography style={{fontWeight: 600}}>My Cart ({cartItems.length}) </Typography>
              </Header>
                {
                  cartItems.map(item =>(
                    <CartItem item={item}/>
                  ))
                }

              <ButtonWrapper>
                <StyledButton>Placed Order</StyledButton>
              </ButtonWrapper>

            </LeftComponent>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems = {cartItems} />
            </Grid>

          </Container>
        :
          <div><EmptyCart/></div>
      }
        
    </>
  )
}

export default Cart
