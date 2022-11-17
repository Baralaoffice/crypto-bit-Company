import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import CardReviews from "./CardReviews";

const usestyles = makeStyles({
  Review: {
    width: "100%",
    float: "left",
    clear: "both",
    background:'#f7f7f7 !important'
  },
  container: {
    width: "90%",
    margin: "auto",
    padding: "60px 25px",
  },
  row: {
    display: "flex",
    width: "100%",
  },
  col: {
    width: "25%",
    color: "#828282",
    textAlign: "initial",
    fontFamily: "Work Sans",
    "& h4": {
      fontSize: "36px",
      color: "#2A2F35",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      lineHeight: 1.25,
      padding: " 13px 0",
      "& span": {
        display: "block",
        marginBottom: "15px",
        color: "#828282",
        fontSize: "18px",
        fontFamily: "Work Sans",
      },
    },
  },
  col1:{
    width:'75%',
    paddingLeft:' 10% ',
  }
});

const Reviews = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Review}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <span>REVIEWS</span>
            <Typography variant="h4">
              What our customers are saying about us
            </Typography>
            <Typography variant="h4">
              3000
              <span>Happy Customers</span>
            </Typography>
          </Box>
          <Box  className={classes.col1}>
            <CardReviews/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
