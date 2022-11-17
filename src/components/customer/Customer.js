import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "./Card";

const usestyles = makeStyles({
  Customer: {
    width: "100%",
    float: "left",
    clear: "both",
    background:'#f7f7f7',
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: "60px 25px 90px 25px",
    borderTop: "double 3px #828282",
  },
  col:{
    width:'100%',
    display:'block',
    float:'left',
    padding: '35px 0px',
  },
  col_con: {
    padding: "0px 30px",
    "& h3": {
      fontSize: "52px",
      color: "#2a2f35",
      fontFamily: "Work Sans",
      fontWeight: " bold",
      padding: "29px 30px",
    },
  },
});

const Customer = () => {
  const classes = usestyles();

  return (
    <Box className={classes.Customer}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Box className={classes.col_con}>
            <Typography>
              <Link>Learn more</Link> about CryptiBIT’s unique features.
            </Typography>
            <Typography variant="h3">
              Custom advisors services for your business
            </Typography>
            <Typography>
              We are creating products that combine cutting-edge technologies
              for a better now
            </Typography>
          </Box>
        </Box>
        <Box className={classes.col}>
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Customer;
