import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const usestyles = makeStyles({
  Wallet: {
    width: "100%",
    float: "left",
    clear: "both",
    padding: "50px 19px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
    background: "linear-gradient(to right,#882afc 0%, #224ba5 100%)!important",
    alignItems: "center",
    padding: "50px 34px",
    borderRadius: "17px",
  },
  col: {
    textAlign: "initial",
    color: "#b8b8b8",
    "& a": {
      color: "#fff",
    },
    "& h3": {
      color: "#fff",
      fontSize: "30px",
      fontFamily: "Work Sans",
      fontWeight: "bold",
    },
  },
  btn: {
    "& Button": {
      padding: " 10px 30px",
      fontSize: "12px",
      height: "auto",
      fontFamily: "Montserrat",
    },
  },
});

const Wallet = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Wallet}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Typography variant="h3">Start trading with One Wallet</Typography>
          <Typography>
            Start trading with One Wallet For anything else, please{" "}
            <Link>contact us</Link> – we would be delighted to help.
          </Typography>
        </Box>
        <Box className={classes.btn}>
          <Button variant="contained">See all features</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
