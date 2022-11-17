import React from "react";
import { Box, Link, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  row: {
    display: "flex",
  },
  menu: {
    display: "flex",
    alignItems: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    color: "#fff !important",
    fontSize: "14px",
    padding: "10px 15px",
    textDecoration: "none !important",
    fontFamily: "Roboto",

    "& svg": {
      marginLeft: "5px",
    },
  },
  token: {
    "& Button": {
      color: "#fff",
      backgroundColor: "#345fe0",
      borderRadius: "5px",
      padding: "8px 30px",
      textTransform: "capitalize",
      marginLeft: "20px",
    },
  },
});

const data = [
  {
    name: "Demos",
  },
  {
    name: "Pages",
  },
  {
    name: "Cases",
  },
  {
    name: "Blog",
  },
  {
    name: "Contact us",
  },
  {
    name: "Elements",
  },
];

const Menu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.menu}>
        {data.map((item, i) => (
          <Link href="#" className={classes.item} key={i}>
            {item.name}
            <KeyboardArrowDownIcon />
          </Link>
        ))}
      </Box>
      <Box className={classes.token}>
        <Button>Get token</Button>
      </Box>
    </Box>
  );
};

export default Menu;
