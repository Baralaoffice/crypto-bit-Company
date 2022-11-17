import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import User from "./User";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const usestyles = makeStyles({
  Testimonial: {
    width: "100%",
    float: "left",
    clea: "Both",
    padding:'60px 0'
  },
  row: {
    width: "90%",
    margin: "auto",
    clear: "both",
  },
  col: {
    color: "#828282",
    "& span": {
      fontFamily: "Work Sans",
      fontSize: "16px",
    },
    "& h3": {
      color: "#2a2f35",
      fontFamily: "Work Sans",
      fontSize: "36px",
      fontWeight: "bold",
      padding: "11px",
    },
    "& p": {
      margin: "20px 0 10px",
      fontFamily: "Work Sans",
      fontSize: "18px",
      lineHeight: 1.7,
      padding: "0 30%",
    },
  },
  cont: {
    width: "100%",
    float: "left",
    "& Button": {
      backgroundImage: "url(./img/download.png)",
      backgroundPosition: "calc(100% - 45px) 0",
      backgroundRepeat: "repeat-y",
      fontFamily: "Montserrat",
      paddingRight: "16px",
      borderRadius: "5px",
      textTransform: "none",
      fontSize: "12px",
      marginLeft:"25px",
      "& svg":{
        marginLeft: '30px',
        width: '15px',
      }
    },
  },
});

const Testimonial = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Testimonial}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <span>Mentors and Friends</span>
          <Typography variant="h3">Our people make the difference</Typography>
          <Typography>
            Our team consists of developers, economists and designers from all
            over the world
          </Typography>
        </Box>
        <User />
        <Box className={classes.cont}>
          <Typography style={{ color: "#9b9b9b" }}>
            3 open vacancies this month.
            <Button variant="contained">
              See all vacancies
              <ArrowForwardIosIcon />
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
