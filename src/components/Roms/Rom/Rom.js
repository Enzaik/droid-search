import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '20px',

    cursor: 'pointer',
    '& h3': {
      fontFamily: 'Product Sans Remote'
    },
      '&:hover': {
    backgroundColor: 'rgb(26, 115, 232)',
    color: 'white'
  }
  },

}));

export default function Rom({ name, description }) {
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