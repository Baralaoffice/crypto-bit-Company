import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const usestyles = makeStyles({
  row: {
    width: "100%",
    // height: "100vh",
    float: "left",
    background: "url(./img/crypto-001-93.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  col: {
    width: "90%",
    margin: "auto",
    display: "flex",
    padding: "74.5px",
    alignItems: "center",
  },
  col_con: {
    width: "100%",
    color: "#b8b8b8",
    textAlign: "initial",
    "& h4": {
      color: "#fff",
      fontSize: "36px",
      fontWeight: "bold!important",
      fontFamily: "Work Sans",
      lineHeight: 1,
      marginTop: "10px",
    },
    "& p": {
      margin: "17px 0",
      fontSize: "18px",
    },
    "& Button": {
      borderRadius: "5px",
      fontSize: "12px",
      height: "auto",
      textTransform: "uppercase",
      fontFamily: "Montserrat",
      padding: " 16px 30px",
      lineHeight: 1,
      marginTop: "13px",
    },
  },
  col_ico: {
    width: "100%",
    textAlign: "center",
    "& svg": {
      fontSize: "62px",
      color: " #fff",
    },
  },
});
const Purchase = () => {
  const classes = usestyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        <Box className={classes.col_con}>
          <span>OUR CORE</span>
          <Typography variant="h4">
            Efficient Computing services and blockchain features
          </Typography>
          <Typography>
            Information about the rates is automatically collected from the main
            exchange
          </Typography>
          <Button variant="contained">Purchase theme</Button>
        </Box>
        <Box className={classes.col_ico}>
          <PlayCircleIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Purchase;
