import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const usestyles = makeStyles({
  about: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: '29px 8px',
  },
  col:{
    display: 'flex',
    backgroundColor: "#f2f2f2 !important",
    borderRadius: "30px",
    justifyContent: 'space-between',
    alignItems: 'initial',
    padding:' 65px',
    width: '100%',
  },
  col_img:{
    padding: '0 50px',
    width:'50%',

  },
  col_con:{
    textAlign: 'initial',
    paddingLeft:' 80px',
    width:'50%',
    "& h3":{
        color:'#2a2f35',
        fontSize: '45px',
        fontFamily: 'Work Sans',
        fontWeight:'bold'
    },
    "& p":{
        fontFamily: 'Roboto',
        fontSize: '16px',
        color:'#828282',
        margin: '18px 0',
    },
    "& Button": {
        marginTop:'10px',
        backgroundImage: "url(./img/download.png)",
        backgroundPosition: "45px 0",
        backgroundRepeat: "repeat-y",
        fontFamily: "Montserrat",
        borderRadius: "5px",
        textTransform: "none",
        fontSize: "12px",
        padding: '10px 28px 10px 18px',
        "& svg":{
          marginRight: '30px',
          width: '15px',
        }
      },
  }
});

const About = () => {
  const classes = usestyles();
  return (
    <Box className={classes.about}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Box className={classes.col_img}>
            <img src="./img/crypto-001-72-600x473 (1).png" alt="" />
          </Box>
          <Box className={classes.col_con}>
            <Typography variant="h3">About Us</Typography>
            <Typography>
              Advisory and technology services to execute third-party ICOs. New
              listing and market making services to foster enhanced token
              liquidity.
            </Typography>
            <Button variant="contained"><VideoLibraryIcon/>Presentation</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
