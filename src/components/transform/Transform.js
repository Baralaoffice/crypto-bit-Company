import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const usestyles = makeStyles({
  transform: {
    width: "100%",
    float: "left",
    clear: "both",
    background:
      "linear-gradient(to bottom,#ffffff 0%, #f7f7f7 100%) !important",
    padding: "50px 0",
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: "29px 8px",
    display: "flex",
    gap: "50px",
    alignItems: 'center',
  },
  col_con: {
    width: "100%",
    textAlign: "initial",
    color: "#828282",
    paddingRight: '55px',
    "& span": {
      fontFamily: "Work Sans",
      color: "#828282",
      fontSize: "16px",
    },
    "& h3": {
      fontSize: "36px",
      color: "#2A2F35",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontFamily: "Work Sans",
    },
    "& p": {
      margin: "26px 0",
      fontFamily: "Roboto",
      fontSize: "18px",
    },
  },
  col_ul: {
    display: "flex",
    "& ul": {
      width: "100%",
      paddingLeft: "40px",
      "& li": {
        color: "#828282",
        lineHeight: "1.7",
        fontSize: "18px",
        fontFamily: " 'Roboto'",
      },
    },
  },
  colprogres: {
    width: "100%",
    textAlign: "initial",
    color: "#828282",
    display:'flex',
    flexDirection:'column',
    gap:'40px',
    paddingLeft: '55px',

  },
  prese: {
    width: "100%",
    borderBottom: "2px solid",
    position: "relative",
    fontSize: '85%',
    "& p":{
        marginBottom: '15px',
        display: 'flex',
    fontSize: '85%',
    justifyContent: 'space-between',
    }
  },
  present1: {
    width: "90%",
    position: "absolute",
    height: "2px",
    background: "#2c99ed",
  },
  present2: {
    width: "80%",
    position: "absolute",
    height: "2px",
    background: "#2c99ed",
  },
  present3: {
    width: "70%",
    position: "absolute",
    height: "2px",
    background: "#2c99ed",
  },
  present4: {
    width: "85%",
    position: "absolute",
    height: "2px",
    background: "#2c99ed",
  },
});

const Transform = () => {
  const classes = usestyles();
  return (
    <Box className={classes.transform}>
      <Box className={classes.row}>
        <Box className={classes.col_con}>
          <span>ALWAYS</span>
          <Typography variant="h3">
            Transform your ideas into a great product
          </Typography>
          <Typography>
            Its main goal is to bring 200 million new retail investors to crypto
            by eliminating all fiat obstacles on the way to crypto.
          </Typography>
          <Box className={classes.col_ul}>
            <ul>
              <li>Financial Services</li>
              <li>Blockchain Strategy</li>
              <li>Exchange Solutions</li>
            </ul>
            <ul>
              <li>Smart Systems</li>
              <li>Data Storage</li>
              <li>Exchange Solutions</li>
            </ul>
          </Box>
        </Box>
        <Box className={classes.colprogres}>
          <Box className={classes.prese}>
            <Typography>BLOCKCHAIN AND SMART CONTRACTS <span>90%</span></Typography>
            <Box className={classes.present1}></Box>
          </Box>
          <Box className={classes.prese}>
            <Typography>BLOCKCHAIN AND SMART CONTRACTS  <span>80%</span></Typography>
            <Box className={classes.present2}></Box>
          </Box>
          <Box className={classes.prese}>
            <Typography>BLOCKCHAIN AND SMART CONTRACTS  <span>70%</span></Typography>
            <Box className={classes.present3}></Box>
          </Box>
          <Box className={classes.prese}>
            <Typography>BLOCKCHAIN AND SMART CONTRACTS  <span>85%</span></Typography>
            <Box className={classes.present4}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Transform;
