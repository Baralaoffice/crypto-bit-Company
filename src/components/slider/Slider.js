import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  Slider:{
    width:'100%',
    float:'left',
    borderBottom:'1px solid #ebebeb',
    padding:'60px 0'
  },
    col:{
        "& img":{
            width:'100%',
            filter:' grayscale(100%)',
        }
    },
    row:{
        width:'90%',
        margin:'auto',
        padding:'0 50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:'15px'

    },
    con:{
      padding:'20px 0',
    "& p":{
      color:'#828282'
    }
    }
});
const data = [
  {
    img: "./img/Poloniex-logo-color.png",
  },
  {
    img: "./img/coindesk-logo-color.png",
  },
  {
    img: "./img/bitbucket-logo-color.png",
  },
  {
    img: "./img/bitfinex-color-logo.png",
  },
  {
    img: "./img/coinmarketcap-logo-color.png",
  },
];
const Slider = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Slider}>
      <Box className={classes.con}>
        <Typography>Trusted by great teams</Typography>
      </Box>
        <Box className={classes.row}>
        {data.map((item, i) => (
          <Box key={i}  className={classes.col}>
            <img src={item.img} alt="aaa" />
          </Box>
        ))}
        </Box>
    </Box>
  );
};

export default Slider;
