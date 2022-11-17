import { Box, Button, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Slider from "../slider/Slider";

const usestyles = makeStyles({
  project: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "url(./img/crypto-001-92.jpg)",
    // height: "100vh",
  },
  container: {
    width: "90%",
    margin: "auto",
    padding: "0 25px",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    "&.con":{
        display:'none '
    }
  },
  col: {
    width: "100%",
    padding: "90px",
    display: "block",
    float: "left",
    "& p": {
      color: "#cfcfcf",
      fontFamily: "Roboto",
      fontSize: "16px",
      "& a": {
        color: "#cfcfcf",
      },
    },
    "& h3": {
      color: "#fff",
      fontFamily: "Work Sans",
      fontSize: "52px",
      padding: "40px 120px 32px",
      fontWeight: "bold!important",
    },
    "& button": {
      fontSize: "14px",
      fontWeight: "normal",
      fontFamily: "Montserrat",
      padding: "12px 30px",
      background: "#345fe0",
    },
  },
});

const Project = () => {
  const classes = usestyles();
  return (
    <Box className={classes.project}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Slider />
          <Box className={classes.col}>
            <Typography>
              <Link>Learn more</Link> about CryptiBIT’s unique features.
            </Typography>
            <Typography variant="h3">
              Get full control on your crypto projects
            </Typography>
            <Button variant="contained">PURCHASE CRYPTIBIT</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
