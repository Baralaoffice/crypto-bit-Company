import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';


const usestyles = makeStyles({
  row:{
width:'100%',
clear:'both',
fontFamily: 'Work Sans',
  },
  col_ac:{
    textAlign:'initial',
    margin:' 35px 0',
    "& p":{
      color:'#828282',
    },
    "& h2":{
      fontSize: '36px',
      color:'#000',
      fontWeight: 'bold!important',
      lineHeight: 1.25,
    }
  },
  col_aa:{
    "& span":{
      display:'flex',
      alignItems: 'center',
      fontSize: '20px',
    padding: '7px 0',
    color: '#666',
    fontFamily: 'Work Sans',
    fontWeight: '700',
    lineHeight: 1,
      "& svg":{
        marginRight:'14px'
      }
    }
  }

})

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid 0`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'initial',
  marginBottom:' 15px',
    borderRadius: '50px',
    overflow: 'hidden',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  
}));

export default function Accontract() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

const classes = usestyles();
  return (
      <Box className={classes.row}>
        <Box className={classes.col_ac}>
            <Typography>OUR CORE</Typography>
            <Typography variant='h2'>Financial Advisor</Typography>
        </Box>
        <Box className={classes.col_aa}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <span> <LockOpenIcon />Growing Family</span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Advisory and technology services to execute third-party ICOs. New listing and market making services to foster enhanced token liquidity.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <span><CreditCardIcon />Excellent support</span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We use technology to feel connected without realizing that digital connections prove to be poor substitutes to real-life interaction. What’s more, younger generations, who are most in need of real-world socialization, are affected more than anyone! We believe this damaging trend will only get worse without intervention.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <span><SaveAsIcon />Become an Investor</span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Crypto is an ERC20 compliant token generated during our ICO. Crypto has a finite supply. Crypto enables its owners to support our vision by creating and curating challenges. Owners get rewarded based on the quality of their activity and their level of engagement.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
  );
}