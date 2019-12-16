import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Kernel from './Kernel/Kernel'

export default function Kernels(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Product Sans Remote'
    },
  }));

  const classes = useStyles();

  return (
    <>
      <h1 className={classes.root} >Kernels</h1>
      {props.kernels.filter(kernel => {
        return kernel.name.toLowerCase().includes(props.text.toLowerCase())
      })
        .map(({ id, name, description }) => (
          <Kernel name={name} description={description} />
        ))}
    </>
  )
}