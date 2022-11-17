import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography, Avatar } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

const usestyles = makeStyles({
  card: {
    width: "100%",
    float: "left",
    display: "flex",
    gap: "44px",
  },
  Ava: {
    width: " 75px !important",
    height: "75px !important",
  },
  cardbox: {
    textAlign: "initial",
   
    "& button": {
      padding: "40px 40px 30px",
      background:'#fff !important',

      "&:hover":{
        background:'none',
      },
      "& >div":{
        padding:'0',
      },
      "& p": {
        marginBottom: "30px",
        marginTop: "20px",
        fontSize: '16px',
        color:'#2a2f35',
      },
    },
  },
  name:{
    borderTop: '1px solid #eee',
    marginLeft: '-40px',
    marginRight: '-40px',
    paddingTop: '20px',
    paddingLeft: '40px',
    paddingRight: '40px',
    "& h5":{
        fontSize: '18px',
        fontFamily: 'Work Sans',
        color: '#2a2f35',
        fontWeight: 'bold',
        lineHeight: 1.25,
    marginTop: '5px',
    }
  }
});

const Data = [
  {
    img: "./img/crypto-001-65-75x75.jpg",
    pra: "This theme is well documented and easy to understand. It is not complex and you don't lose yourself inside unending setting pages or finding yourself fighting to build a complex homepage etc.",
    name:'Beverly Tomas',
    sub:'Envato'

  },
  {
    img: "./img/crypto-001-67-75x75.jpg",
    pra: "The design in amazing and highly customizable. The customer support responds in minutes and is super helpful. They solved my fairly complex problems with ease. I highly recommend this theme!",
    name:'Franklin Adams',
    sub:'Envato'

  },
];

export default function CardReviews() {
  const classes = usestyles();
  return (
    <Box className={classes.card}>
      {Data.map((item, i) => (
        <Card className={classes.cardbox} key={i}>
          <CardActionArea>
            <Avatar src={item.img} alt="sdf" className={classes.Ava} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.pra}
              </Typography>
              <Box className={classes.name}>
              <Typography gutterBottom variant="h5">
               {item.name}
              </Typography>
               <span>{item.sub}</span>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
