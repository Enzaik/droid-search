import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rom from './Rom/Rom'



export default function Roms(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Product Sans Remote'
    },
  }));


  const classes = useStyles();

  return (
    <>
      <h1 className={classes.root} >Roms</h1>
      {props.roms.filter(rom => {
        console.log(rom.name.toLowerCase().includes(props.text.toLowerCase()))
       return rom.name.toLowerCase().includes(props.text.toLowerCase())
      })
        .map(({ id, name, description }) => (
          <Rom name={name} description={description} />
        ))}


    </>
  )
}