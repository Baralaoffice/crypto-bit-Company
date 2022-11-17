import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  join: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  row: {
    width: "90%",
    margin: "auto",
    clear: "both",
    display: "flex",
    padding: "5rem 2rem",
    alignItems:'center',
  },
  col: {
    width: "50%",
    textAlign: 'end',
    "& h2": {
      color: "#000",
      fontSize: "37px",
      fontWeight: "400",
      position: "relative",
      fontFamily: "'Work Sans',sans-serif",
    },
  },
  form: {
    display: "flex",
    padding: "9px 26px",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      color: "#d9d9d9",
      fontSize: "0.8rem",
      width: "20rem",
      padding:'14px',
      border:'1px solid #eee'
    },
    "& Button": {
      width: "7rem",
      background: "#345fe0",
      color: "#fff",
      border: "4px solid transparent",
      fontWeight: "700",
      padding: "0.5rem",
      transition: "all .3s",
      fontSize: "0.8rem",
      textTransform: "capitalize",
    },
  },
});

const New = () => {
  const classes = usestyles();
  return (
    <Box className={classes.join}>
      <Box className={classes.row}>
        <Box className={classes.col}>
          <Typography variant="h2">
          Newsletter Sign Up
          </Typography>
        </Box>
        <Box className={classes.col}>
          <form className={classes.form}>
            <input type="email" name="user_email"
              placeholder="Enter your Email Address here..."
              variant="outlined"
            />
           <Button type="submit" value="Join now" >Join now</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default New;
