import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rom from './Rom/Rom'



export default function Roms() {
  const useStyles = makeStyles(theme => ({
    root: {     
        fontFamily: 'Product Sans Remote'      
    },
  }));

  const classes = useStyles();

  return (
    <>
    <h1 className={classes.root} >Roms</h1>
      <Rom name="Superior Rom" description="Superior Rom description" />
      <Rom name="Habhok Rom" description="Kanged Material alert" />
    </>
  )
}