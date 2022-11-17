import { Box, Button, Typography, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const usestyles = makeStyles({
  cart: {
    width: "100%",
    float: "left",
    clear: "both",
    "&>p":{
        padding:"40px 0"
    }
  },
  row:{
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    color: "#828282",
    padding: "50px",
    "& h4": {
      marginBottom: "15px",
      fontWeight: "bold",
      lineHeight: "1.25",
      color:'#000',
      fontSize: '21px',
    },
    "& a":{
        marginTop: '30px',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    border: '1px solid #D9D9D9',
    color: '#2a2f35',
    fontSize: '12px',
    height: 'auto',
    padding: '11px 35px',
    "& svg":{
        padding: '5px',
    marginRight: '13px',
    }
    },
  },
});

const data = [
  {
    img: "./img/crypto-001-86-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
  {
    img: "./img/crypto-001-87-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
  {
    img: "./img/crypto-001-88-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
  {
    img: "./img/crypto-001-90-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
  {
    img: "./img/crypto-001-81-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
  {
    img: "./img/crypto-001-91-300x276.png",
    name: "Bitcoin Trade",
    pra: "Advisory and technology services to execute third-party ICOs.",
    btn: "Learn More",
  },
];
const Card = () => {
  const classes = usestyles();
  return (
    <Box className={classes.cart}>
      <Grid container spacing={4}>
        {data.map((item, i) => (
          <Grid item xs={4} key={i}>
            <Box className={classes.row}>
              <Box>
                <img src={item.img} alt="aa" />
              </Box>
              <Typography variant="h4">{item.name}</Typography>
              <Typography>{item.pra}</Typography>
              <Button href="#" variant="outlined"><ArrowForwardIcon/>{item.btn}</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography>Don’t hesitate, contact us for better help and services. <Link>Explore all services</Link></Typography>
    </Box>
  );
};

export default Card;
