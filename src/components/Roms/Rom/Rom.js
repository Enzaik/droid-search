import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '20px',
    '& h3': {
      fontFamily: 'Product Sans Remote'
    }
  },
}));

export default function Roms({name, description}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {name}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </Paper>
  );
}