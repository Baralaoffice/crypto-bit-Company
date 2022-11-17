import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const usestyles = makeStyles({
    row:{
        width:'100%',
        paddingLeft:'15%'
    },
    col:{
        height:'400px',
        position:'relative',
        borderRadius:'10px',
        overflow:'hidden'
    },
    col_con:{
        width: '100%',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        color:"#ffffff",
        "& h4":{
            fontSize: '32px!important',
    lineHeight: 'normal!important',
    fontFamily: 'Work Sans',
    marginBottom: '15px',
    fontWeight: 'bold',
        },
        "& p":{
            color: '#eaeaea!important',
            fontSize: '14px;',
        }

    }
})

const Acimage = () => {
    const classes = usestyles();
  return (
    <Box className={classes.row}>
        <Box className={classes.col}>
            <img src="./img/crypto-001-94-1170x660.jpg" alt='' />
            <Box className={classes.col_con}>
            <Typography variant='h4'>Using Smart-Contracts</Typography>
            <Typography>The WEB 3.0</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Acimage
