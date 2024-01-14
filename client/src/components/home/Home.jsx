import {React, useEffect} from 'react'
import { Box, styled } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import NavBar from './NavBar'
import Banner from './Banner'
import { getProducts } from '../../redux/actions/productAction'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Compnnents = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`
const Home = () => { 

  const { products } = useSelector(state => state.getProducts)

  console.log(products);
  // const { products } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
        <NavBar/>
        <Compnnents>
          <Banner/>
          <MidSlide products={products} title='Deal of the Day' timer={true}/> 
          <Slide products={products} title='Top Deals' timer={false}/> 
          <MidSection/>
          <Slide products={products} title='Top Deals On Electronics' timer={false}/> 
          <Slide products={products} title='Fashion Best Sellers' timer={false}/> 
          {/* <Slide products={products} title=' Fastive Wear' timer={false}/> 
          <Slide products={products} title='Beauty Foods & More' timer={false}/> 
          <Slide products={products} title='Most Searched For On Flipkart' timer={false}/> 
          <Slide products={products} title='Mobiles' timer={false}/> 
          <Slide products={products} title='Camera' timer={false}/> 
          <Slide products={products} title='Laptops' timer={false}/> 
          <Slide products={products} title='TVS' timer={false}/> 
          <Slide products={products} title='Large Appliances' timer={false}/> 
          <Slide products={products} title='Clothing' timer={false}/> 
          <Slide products={products} title='Footwear' timer={false}/> 
          <Slide products={products} title='Groceries' timer={false}/>  */}
        </Compnnents>
    </>
      
  ) 
}

export default Home
