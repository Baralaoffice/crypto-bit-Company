import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Tools from "./Tools";

const usestyles = makeStyles({
  info: {
    width: "100%",
    float:'left'
  },
  col:{
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 0 42px 0",
  },
  tab: {
    width: "100%",
    "& div": {
      display: "flex",
      justifyContent: "center",
      "& Button": {
        fontWeight: "bold",
        textTransform: "capitalize",
        fontFamily: "Roboto",
        fontSize: "17px",
      },
    },
  },
});

const InfoTabs = () => {
  const classes = usestyles();

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.info}>
      <Box className={classes.col}>
        <Tabs value={value} onChange={handleChange} className={classes.tab}>
          <Tab value="one" label="Technology" />
          <Tab value="two" label="Saving Deposits" />
          <Tab value="three" label="Wallet Apps" />
        </Tabs>
      </Box>
        <Tools />
    </Box>
  );
};

export default InfoTabs;
