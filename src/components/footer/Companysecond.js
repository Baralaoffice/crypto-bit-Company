import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Social from "./social";

const useStyles = makeStyles({
  row: {
    width: "100%",
    float: "left",
    marginTop: "20px",
  },
  content: {
    "& a": {
      margin: "0 3px !important",
      padding: "11px",
      fontSize: " 16px !important",
      fontFamily: "montserrat, Sans-serif !important",
      fontWeight: "500 !important",
      color: "#717080 !important",
      display: "block",
    },
  },
  col: {
    width: "100%",
    display: "block",
    margin: "auto",
    textAlign: "initial",
    "& p": {
      margin: "0 3px !important",
      padding: "11px",
      fontSize: " 16px !important",
      fontFamily: "montserrat, Sans-serif !important",
      fontWeight: "500 !important",
      color: "#fff !important",
      display: "block",
    },
  },
});

const Companysecond = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        <Typography>
          ICO Crypto
          <br />
          Company Number BSHF23
        </Typography>
        <Typography>
          568 Broadway New York<br></br>
          Soho, NY 4235
        </Typography>
        <Box className={classes.content}>
          <Social />
        </Box>
      </Box>
    </Box>
  );
};

export default Companysecond;
