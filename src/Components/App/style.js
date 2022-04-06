import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';

export const useStyles = makeStyles({
  root: {
    backgroundColor:'#e7ebf0',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  paper:{
      width:'830px',
      height:'600px',
      overflow:'auto'
  }
});

