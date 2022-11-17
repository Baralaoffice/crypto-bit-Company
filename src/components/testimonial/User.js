import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const data = [
  {
    img: "./img/team-6-100x100 (1).png",
    hand: "Edvard Prescott",
    name: "General Counsel",
    pra: "Keith has been a key player in shaping the future of money having served as a senior executive",
    icon: {
      facebook: <FacebookIcon />,
      twiter: <TwitterIcon />,
      linkdin: <LinkedInIcon />,
    },
  },
  {
    img: "./img/team-7-100x100.png",
    hand: "Martin Brennan",
    name: "Legal Counsel - Europe",
    pra: "Greg Brockman is the former CTO of CryptiBIT, which he helped build from 4 to over 250 employees. ",
    icon: {
      facebook: <FacebookIcon />,
      twiter: <TwitterIcon />,
      linkdin: <LinkedInIcon />,
    },
  },
  {
    img: "./img/team-8-100x100.png",
    hand: "Richard Brown",
    name: "PR Consultant",
    pra: "Member of the Python Software Foundation and a founding member of the Subversion Project.",
    icon: {
      facebook: <FacebookIcon />,
      twiter: <TwitterIcon />,
      linkdin: <LinkedInIcon />,
    },
  },
];
const usestyles = makeStyles({
    row:{
        width:'100%',
        float:'left',
        clear:'both',
        padding: '60px 0',
    },
  col: {
    display: "flex",
    textAlign: "initial",
    "& span": {
      "&> img": {
        maxWidth: "100px !important",
        height: "auto !important",
        borderRadius: "50px !important",
        width: "100px",
      },
    },
    "& div": {
      padding: "0 30px",
      "& div": {
        paddingLeft: "0px",
        marginTop: "10px",
        display: "flex",
        gap: "12px",
        "& svg":{
            fontSize: '18px',
        }
      },
      "& h5": {
        fontSize: "24px!important",
        marginBottom: "10px",
        fontWeight: "bold",
        color: "#2A2F35",
        fontFamily: "Work Sans",
      },
      "& span": {
        color: "#828282",
        fontFamily: "Roboto",
        fontSize: "16px",
        padding: "12px 0",
        display: "block",
      },
      "& p": {
        color: "#828282",
        fontFamily: "Roboto",
        fontSize: "16px",
      },
    },
  },
});

const User = () => {
  const classes = usestyles();
  return (
      <Box className={classes.row}>
        <Grid container spacing={2}>
          {data.map((item, i) => (
            <Grid item xs={4} key={i}>
              <Box className={classes.col}>
                <span>
                  <img src={item.img} alt="ewc" />
                </span>
                <Box>
                  <Typography variant="h5">{item.hand}</Typography>
                  <span>{item.name}</span>
                  <Typography>{item.pra}</Typography>
                  <Box>
                    <Link href="">{item.icon.facebook}</Link>
                    <Link href="">{item.icon.twiter}</Link>
                    <Link href="">{item.icon.linkdin}</Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default User;
