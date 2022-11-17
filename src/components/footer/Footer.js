import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Logo from "../headers/Logo";
import Company from "./Company";
import Companysecond from "./Companysecond";
import Resours from "./Resours";

const usestyles = makeStyles({
  footer: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "#0a0a0a",
  },
  container: {
    width: "90%",
    margin: "auto",
    clear: "both",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    display: "flex",
    color: "#fff",
    textAlign: "initial",
    padding: "60px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  col: {
    width: "100%",
    "& h4": {
      fontSize: "22px",
      fontFamily: "Work Sans",
      fontWeight: "bold!important",
      color: "#fff",
    },
  },
  pra: {
    marginTop: "28px !important",
    display: "block",
  },
  power: {
    padding: "30px 0",
    textAlign: "initial",
    color: "#fff",
    float: "left",
    "& span": {
      color: "#828282",
    },
  },
});

const Footer = () => {
  const classes = usestyles();
  return (
    <Box className={classes.footer}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <Logo />
            <Typography className={classes.pra}>
              CryptiBIT – IEO, ICO Landing Page, ICO Consulting, Bitcoin,
              Blockchain and Cryptocurrency WordPress Theme. Cryptocurrency
              widgets, ICO elements and more.
            </Typography>
          </Box>
          <Box className={classes.col}>
            <Typography variant="h4">Resourses</Typography>
            <Resours />
          </Box>
          <Box className={classes.col}>
            <Typography variant="h4">Company</Typography>
            <Company />
          </Box>
          <Box className={classes.col}>
            <Typography variant="h4">Company</Typography>
            <Companysecond />
          </Box>
        </Box>
        <Box className={classes.power}>
          <Typography>
            <span>Powered by</span> webnitter - Premium React Theme
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
