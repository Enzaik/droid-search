import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Kernel from './Kernel/Kernel'



export default function Kernels() {
  const useStyles = makeStyles(theme => ({
    root: {     
        fontFamily: 'Product Sans Remote'      
    },
  }));

  const classes = useStyles();

  return (
    <>
    <h1 className={classes.root} >Kernels</h1>
      <Kernel name="DireWolf Kernel" description="DireWolf Kernel description" />
      <Kernel name="Infinity Kernel" description="Infinity Kernel description" />
    </>
  )
}