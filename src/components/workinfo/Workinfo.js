import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


const usestyles = makeStyles({
  Workinfo: {
    width: "100%",
    float: 'left',
  },
  row:{
    width:'90%',
    margin:'auto',
    padding: '60px 13px',
  },
  col:{
    display:'flex',
    textAlign: 'initial',
    "& span":{
      "& svg":{
        color:' #d1d1d1!important',
        lineHeight: '1em!important',
        fontSize: '40px',
      }
    },
    "& div":{
      paddingLeft: '30px',
      "& h5":{
        fontSize: '24px!important',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#2A2F35',
        fontFamily: 'Work Sans',
      },
      "& p":{
        color: '#828282',
        fontFamily: 'Roboto',
        fontSize: '16px',
      }
    }

  }
})

const data = [
  {
    icon: <LanguageIcon />,
    name: 'Platform for launching your ICO',
    pra: 'Every transaction is rated by both parties, and the reputation of each'
  },
  {
    icon: <MenuIcon />,
    name: 'Large-scale service without boundaries',
    pra: 'Exchange is conducted directly between the seller and the buyer.'
  },
  {
    icon: <BookmarkBorderOutlinedIcon />,
    name: 'Using Smart-Contracts',
    pra: 'Smart contracts are an integral part of the CryptiBIT ecosystem'
  },

]
const Workinfo = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Workinfo}>
      <Box className={classes.row}>
          <Grid container spacing={2}>
            {
              data.map((item, i)=>(
                <Grid item xs={4} key={i}>
                  <Box className={classes.col}>
                    <span>{item.icon}</span>
                    <Box>
                      <Typography variant='h5'>{item.name}</Typography>
                      <Typography>{item.pra}</Typography>
                    </Box>
                    </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
  )
}

export default Workinfo
