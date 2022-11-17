import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import Accontract from './Accontract';
import Acimage from './Acimage';

const usestyles = makeStyles({
  Contracts: {
    width: '100%',
    float: 'left',
    clear: 'both',
    paddingTop: '90px !important',
    paddingBottom: '120px !important',
  },
  container: {
    width: '90%',
    margin: 'auto',
    display: 'flex'
  },
  row:{
    width:'100%',
    float:'left',
    display:'flex',
    alignItems: 'end',
  },
  col_a: {
    width: '33.333%',
    float:'left'
  },
  col_b: {
    width: '66.333%',
    float:'left'

  },
});

const Contracts = () => {
  const classes = usestyles();
  return (
    <Box className={classes.Contracts}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col_a}>
            <Accontract />
          </Box>
          <Box className={classes.col_b}>
            <Acimage/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contracts
