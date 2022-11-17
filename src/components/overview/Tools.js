import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import KeyIcon from "@mui/icons-material/Key";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const usestyles = makeStyles({
  Tools: {
    width: "100%",
    float: "left",
  },
  row: {
    display: "flex",
    "& div:nth-child(2)": {
      "& svg": {
        transform: "rotate(90deg)",
        fontSize: "40px",
      },
    },
  },
  iconbox: {
    width: "100px",
    height: "100px",
    display: "flex",
    margin: "0 auto",
    color: "#2A2F35",
    marginBottom: "30px",
    borderRadius: "50%",
    border: "1px solid #345fe0",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "#d1d1d1",
      fontSize: "40px",
    },
  },
  col: {
    padding: "15px",
    "& h4": {
      fontSize: "18px",
      marginTop: " 0",
      fontWeight: "bold",
      color: "#2a2f35",
      fontFamily: "Work Sans",
      marginBottom: "15px",
    },
  },
  pra: {
    position: "relative",
  },
});
const data = [
  {
    icon: <ContactMailIcon />,
    name: "Launching your ICO",
    pra: "Every transaction is rated by both parties, and the reputation of each",
  },
  {
    icon: <KeyIcon />,
    name: "Using Smart-Contracts",
    pra: "Smart contracts are an integral part of the “Streamity” ecosystem",
  },
  {
    icon: <ContentCopyIcon />,
    name: "Fixed exchange rates",
    pra: "Every transaction is rated by both parties, and the reputation of each",
  },
];
const Tools = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Tools}>
      <Box className={classes.row}>
        {data.map((item, i) => (
          <Box className={classes.col} key={i}>
            <Box className={classes.iconbox}>{item.icon}</Box>
            <Typography variant="h4">{item.name}</Typography>
            <Typography className={classes.pra}>{item.pra}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tools;
