import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  Article: {
    width: "100%",
    float: "left",
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: "25px",
  },
  colbox: {
    gap: "25px",
    display: "flex",
    width: "100%",
    padding: "50px 0",
  },
  ArticleBox: {
    width: "100%",
    height: "300px",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    borderRadius: "9px",
    "&:nth-child(1)":{
      backgroundImage: "url(./img/crypto-001-13-1008x660.jpg)",
    },
    "&:nth-child(2)":{
      backgroundImage: "url(./img/crypto-001-29-1170x660.jpg)",
    },
    "&:nth-child(3)":{
      backgroundImage: "url(./img/office-meeting-1170x660.jpg)",
    }
  },
  colcon: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    textAlign: "initial",
    padding: "20px",
    "& span": {
      color: "#fff",
      fontFamily: "Roboto",
      fontSize: "16px",
    },
    "& p": {
      fontSize: " 24px",
      color: "#fff",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      lineHeight: "1.25",
    },
  },
  col: {
    color: "#828282",
    "& h3": {
      fontSize: "36px",
      lineHeight: "1.25",
      fontWeight: "bold",
      color: "#2A2F35",
    },
    "& p": {
      fontSize: "18px",
      lineHeight: "1.7",
      padding: "16px 232px",
    },
  },
});

const Data = [
  {
    date: "June 10, 2019 ",
    pra: "Webinar: how to hire a high-growth legal team",
  },
  {
    date: "June 10, 2019 ",
    pra: "Making contracts more human: How to make paperwork painless",
  },
  {
    date: "June 10, 2019 ",
    pra: "A new exchange gives priority to regulatory compliance and security",
  },
];
const Article = () => {
  const classes = usestyles();

  return (
    <Box className={classes.Article}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Typography variant="h3">What's on our mind</Typography>
          <Typography>
            Explore our blog for insightful articles, personal reflections and
            ideas that inspire action on the topics you care about.
          </Typography>
        </Box>
        <Box className={classes.colbox}>
          {Data.map((item, i) => (
            <Box className={classes.ArticleBox} key={i}>
              <Box className={classes.colcon}>
                <span>{item.date}</span>
                <Typography>{item.pra}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
