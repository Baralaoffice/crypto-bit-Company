import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import About from '../components/about/About';
import Article from '../components/article/Article';
import Banner from '../components/Banner/Banner';
import Contact from '../components/contacts/Contact';
import Counter from '../components/counter/Counter';
import Cryptibit from '../components/cryptibit/Cryptibit';
import Customer from '../components/customer/Customer';
import New from '../components/news/New';
import Offer from '../components/offer/Offer';
import Overview from '../components/overview/Overview';
import Project from '../components/projects/Project';
import Purchase from '../components/purchase/Purchase';
import Reviews from '../components/reviews/Reviews';
import Slider from '../components/slider/Slider';
import Contracts from '../components/smartcontracts/Contracts';
import Testimonial from '../components/testimonial/Testimonial';
import Transform from '../components/transform/Transform';
import Wallet from '../components/Wallet/Wallet';
import Workinfo from '../components/workinfo/Workinfo';

const usestyles = makeStyles({
    row:{
        width:"100%",
        float:'left',
        "& img":{
          width:'100%',
          float:'left',
          display:'block',
          height: '100%',
        }
    }
})
const Home = () => {
    const classes = usestyles();
  return (
    <Box className={classes.row}>
      <Banner/>
       <Slider/>
       <Overview/>
       <New/>
       <Cryptibit/>
       <Customer/>
       <Counter/>
       <Contracts/>
       <Purchase/>
       <Workinfo/>
       <Wallet/>
       <Testimonial/>
       <About/>
       <Transform/>
       <Reviews/>
       <Article/>
       <Offer/>
       <Contact/>
       <Project/>
    </Box>
  )
}

export default Home
