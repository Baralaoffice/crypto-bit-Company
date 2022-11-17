import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Form from "./Form";

const usestyles = makeStyles({
  Contact: {
    width: "100%",
    float: "left",
    padding: '70px 0',
  },
  container: {
    width: "90%",
    margin: "auto",
    padding: "25px",
  },
  row: {
    width: "100%",
    float: "left",
    display: "flex",
  },
  col: {
    width: "100%",
    float: "left",
    textAlign: "initial",
    "& h3": {
      fontFamily: "Work Sans",
      fontWeight: "bold!important",
      fontSize: "36px",
      color: "#2A2F35",
    },
    "& p": {
      fontFamily: "Roboto",
      // fontWeight: 'bold!important',
      fontSize: "18px",
      color: "#808080",
      lineHeight: 1.7,
      padding: "31px 134px 9px 0",
    },
  },
  ceo: {
    display: "flex",
    marginTop: "30px",
    // padding: '31px 134px 9px 0',
    "& p": {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "#808080",
      lineHeight: 1.7,
      padding: "0",
      marginBottom: "40px",
    },
    "& span": {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "#808080",
      lineHeight: 1.7,
      padding: "0",
      display: "block",
    },
    "& div":{
      width: '100%',
    padding: '11px 67px 24px 0',
    }
  },
});

const Contact = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Contact}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <Typography variant="h3">
              6767 Hollywood Blvd, Los Angeles, CA
            </Typography>
            <Typography>
              Contact us with new business opportunities and speaker requests.
              For jobs, you can see our current openings on the careers page.
            </Typography>
            <Box className={classes.ceo}>
              <Box>
                <Typography variant="h3">Michael Wills</Typography>
                <Typography>CEO & Owner</Typography>
                <span>+32 (0) 3235 234</span>
                <span>noreply@envato.com</span>
              </Box>
              <Box>
                <Typography variant="h3">Greg Becker</Typography>
                <Typography> CTO</Typography>
                <span>+32 (0) 3235 234</span>
                <span>noreply@envato.com</span>
              </Box>
            </Box>
          </Box>
          <Box className={`${classes.col} ${classes.form}`}>
            <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
