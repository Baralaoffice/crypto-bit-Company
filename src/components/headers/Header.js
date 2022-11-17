import { AppBar, Toolbar, Container } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  header:{
    position: 'absolute !important',
    background: 'none !important',
    zIndex: '33',
    boxShadow: 'none !important',
    top: 0,
    left: 0,
    padding: '20px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
  },
    row:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        padding:'28px 0',
    },
     
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl" style={{ paddingLeft: '50px',paddingRight: '50px',}}>
        <Toolbar disableGutters className={classes.row}>
          <Logo/>
          <Menu/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
