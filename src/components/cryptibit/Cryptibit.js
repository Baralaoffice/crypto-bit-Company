import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const usestyles = makeStyles({
  cryptibit: {
    width: "100%",
    float: "left",
    clear: "both",
    background:'linear-gradient(to bottom,#ffffff 0%, #f7f7f7 100%)!important'

  },
  row: {
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems:'center',
    padding:'0 25px 90px 25px',
  },
  col: {
    width: "50%",
    textAlign: "initial",
    color: "#828282",
    "& h3": {
      fontSize: "36px",
      lineHeight: "1.25",
      color: "#2A2F35",
      fontFamily: "Work Sans",
      fontWeight: "bold!important",
      margin: "0 0 10px",
    },
    "& p": {
      fontSize: "18px",
      color: "#828282",
      margin: "10px 0",
    },
  },
  col_img: {
    padding: "50px",
  },
  col_btn: {
    display: " flex",
    gap: "15px",
    marginTop:'15px',
    "& Button": {
      display: " flex",
      textTransform: "uppercase",
      fontSize: " 12px",
      padding: "11px 30px",
      lineHeight: 1,
      fontWeight: "500",
      "& span": {
        paddingLeft: "18px",
        marginLeft: "13px",
        borderLeft: "1px solid #fff",
      },
    },
  },
});
const Cryptibit = () => {
  const classes = usestyles();
  return (
    <Box className={classes.cryptibit}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Box className={classes.col_img}>
            <img src="./img/crypto-001-43.png" alt="dsf" />
          </Box>
        </Box>
        <Box className={classes.col}>
          <span>OUR CORE</span>
          <Typography variant="h3">What is CryptiBIT?</Typography>
          <Typography>
            Built on proven security and technological record. A high level of
            digital asset protection and safe record of transactions.Built on
            fair-exchange protocols enabling cryptocurrency atomic swaps to
            mitigate counter-part risk. Advisory and technology services to
            execute third-party ICOs.
          </Typography>
          <Box className={classes.col_btn}>
            <Button variant="contained">
              HOW IT WORKS
              <span>
                <PlayCircleFilledIcon />
              </span>
            </Button>
            <Button variant="outlined">JOIN US ON TELEGRAM</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cryptibit;
