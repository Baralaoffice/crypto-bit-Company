import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import InfoTabs from "./InfoTabs";

const usestyles = makeStyles({
  Overview: {
    width: "100%",
    // float: "left",
    padding: "60px 0",
    color: "#828282",
  },
  row: {
    width: "90%",
    margin: "auto",
    padding: "0 25px",
  },
  col_con: {
    "& h3": {
      fontSize: "52px",
      color: "#2a2f35",
      fontFamily: "Work Sans",
      fontWeight: " bold",
      padding: "29px 0",
    },
  },
});

const Overview = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Overview}>
      <Box className={classes.row}>
        <Box className={classes.col_con}>
          <Typography>
            <Link>Learn more</Link> about CryptiBIT’s unique features.
          </Typography>
          <Typography variant="h3">Blockchain Company Overview</Typography>
          <Typography>
            We are creating products that combine cutting-edge technologies for
            a better now
          </Typography>
        </Box>
        <InfoTabs />
      </Box>
    </Box>
  );
};

export default Overview;
