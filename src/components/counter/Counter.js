import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  counter: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    borderTop:'1px #ebebeb solid !important ',
    borderBottom:'1px #ebebeb solid !important ',
    // padding: '40px 0',
    "& p": {
        fontFamily: "Work Sans",
        color: "#828282",
        fontSize: "16px",
      },
  },
  col_1: {
    borderRight:'1px #ebebeb solid !important ',
    padding: '40px 57px',
width:'100%',

    "& h2": {
      color: "#6d33e4",
      fontSize: "36px",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      lineHeight: "1.25",
    },
    "& p": {
      fontFamily: "Work Sans",
      color: "#828282",
      fontSize: "16px",
    },
  },
  col_2: {
    borderRight:'1px #ebebeb solid !important ',
    padding: '40px 57px',
width:'100%',
    "& h2": {
      color: "#224ba5",
      fontSize: "36px",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      lineHeight: "1.25",
    },
   
  },
  col_3: {
    padding: '40px 57px',
width:'100%',
    "& h2": {
      color: "#69d6d1",
      fontSize: "36px",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      lineHeight: "1.25",
    },
   
  },
});
const Counter = () => {
  const classes = usestyles();

  return (
    <Box className={classes.counter}>
      <Box className={classes.row}>
        <Box className={classes.col_1}>
          <Typography variant="h2">$50 Billions USD</Typography>
          <Typography>Excepted revenue of coins by 2020</Typography>
        </Box>
        <Box className={classes.col_2}>
          <Typography variant="h2">8 M</Typography>
          <Typography>Transactions</Typography>
        </Box>
        <Box className={classes.col_3}>
          <Typography variant="h2">20x</Typography>
          <Typography>Faster transaction speed</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
