import {Box, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
row:{
    height: "100%",
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "left",
    minWidth: "115px",
    "& a":{
        maxWidth: '216px',
        "& img":{
            width: "179px",
        }
    }
}
})

const Logo = () => {
    const classes = useStyles()
  return (
    <Box className={classes.row}>
      <Link><img src="./img/cb-logo2-white.png" alt='wsd' /></Link>
    </Box>
  )
}

export default Logo
