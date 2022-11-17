import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  Offer: {
    width: "100%",
    float: "left",
    clear: "both",
    borderBottom:'1px solid #ebebeb',
    paddingBottom: '85px',
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: "25px",
  },
  col: {
    color: "#828282",
    fontFamily: "Work Sans",
    fontSize: "16px",
    padding: "0 220px",
    "& h3": {
      fontFamily: "Work Sans",
      padding: "5px 0 34px",
      fontWeight: " bold!important",
      fontSize: "36px",
      color: "#2A2F35",
    },
    "& button":{
        borderRadius: '5px',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        padding: '12px 30px',
    }
  },
});

const Offer = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Offer}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <span>Special Offer</span>
          <Typography variant="h3">
            Consult our experts about your project for free
          </Typography>
          <Button variant="contained">SERVICES</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
