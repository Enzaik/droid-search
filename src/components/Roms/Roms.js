import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withFirebase } from '../../firebase'

import Rom from './Rom/Rom'

function Roms(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Product Sans Remote'
    },
  }));

  const [roms, setRoms] = useState([])

  useEffect(() => {
    let roms = [];
    let name = ''
    props.firebase.checkUser('ernesto.diaz.nesty.1987@gmail.com').then(querySnapshot => {
      querySnapshot.forEach(doc => {
        name = doc.data()
        console.log('doc', name);
        roms.push(doc.data())
      })
      setRoms(roms);
    })
      .catch(error => {
        console.log('error', error)
      })

  }, [])

  const classes = useStyles();
 
  return (
    <div>
      <h1 className={classes.root} >Roms</h1>
      {
        roms.filter(rom => rom.name.toLowerCase().includes(props.text))
        .map(rom => (
          <Rom name={rom.name} description={rom.description} />
        ))

      }
    </div>
  )
}

export default withFirebase(Roms)