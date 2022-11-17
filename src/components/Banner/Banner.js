import { Box, Typography, Button,Link } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const usestyles = makeStyles({
  banner: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "100%",
    height:'100vh',
    position: "relative",
    float: "left",
    background:'url(./img/crypto-001-71.jpg), linear-gradient(rgba(9, 43, 43, 0.4) 0%, rgba(10, 7, 7, 0.5) 100%)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundBlendMode: 'multiply',
  },
  col: {
    // width: '284px',
    position:'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& h1":{
    fontWeight: '500',
    fontSize: "50px",
    color:'#fff',
    fontFamily: "Work Sans, sans-serif",
    lineHeight: '52px',
    letterSpacing: '0px',
    margin: '50px 0px 0px',
    },
    "& p":{
      color:'rgb(181 181 181)',
      fontWeight: '400',
      fontSize: "18px",
      fontFamily: 'Roboto, sans-serif',
    lineHeight: '27px',
    letterSpacing: '0px',
    width: '476px',
    margin: '30px auto',

    },
    "& Button":{
      background:' rgba(255, 255, 255, 0.95)',
    fontFamily: "Montserrat, sans-serif",
    lineHeight: '17px',
    letterSpacing:' 1px',
    fontWeight: '400',
    fontSize: '14px',
    borderRadius: "10px",
    padding: '20px 35px' ,
    color: 'rgb(33, 33, 33)',
    textDecoration: 'none',
    }
  },
  arrow:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    position:'absolute',
    bottom:'0',
    padding:'40px',
    "& a":{
      display:'flex',
      color:'#fff',
      textDecoration: 'none',
    fontSize: '11px',
    "& svg":{
    fontSize: '16px',

    }

    }
  },
});
const Banner = () => {
  const classes = usestyles();
  return (
    <Box className={classes.banner}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Typography variant="h1">Smart and effective solutions for businesses </Typography>
          <Typography>
            We are creating products that combine cutting-edge technologies for
            a better now{" "}
          </Typography>
          <Button>GET STARTED </Button>
        </Box>
        <Box className={classes.arrow}>
          <Typography><Link href="#">MORE INFORMATION <ChevronLeftIcon/></Link> </Typography>
          <Typography><Link href="#">NEXT SLIDE<ChevronRightIcon/></Link> </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
