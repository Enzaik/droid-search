import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { withFirebase } from '../../firebase'
import Rom from './Rom/Rom'
import { Container } from '@material-ui/core';

function Roms(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Product Sans Remote'
    },
    skeleton: {
      marginBottom: '12px'
    }
  }));

  const [roms, setRoms] = useState([]);
  const [loading, setLoading] = useState(true)

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
      setLoading(false);
    })
      .catch(error => {
        console.log('error', error)
      })

  }, [])

  const classes = useStyles();

  const romsRender = loading ?
    <>
      <LinearProgress />
      <Container maxWidth="sm">
        <h1 className={classes.root} >Roms</h1>
        <Skeleton className={classes.skeleton} variant="rect" width={538} height={105} />
        <Skeleton className={classes.skeleton} variant="rect" width={538} height={105} />
        <Skeleton className={classes.skeleton} variant="rect" width={538} height={105} />
      </Container>
    </>
    : (
      <>
      <LinearProgress style={{visibility: 'hidden'}}/>
      <Container maxWidth="sm">
        <h1 className={classes.root} >Roms</h1>
        {
          roms.filter(rom => rom.name.toLowerCase().includes(props.text.toLowerCase()))
            .map(rom => (
              <Rom name={rom.name} description={rom.description} />
            ))
        }


      </Container>
      </>
    )


  return (
    <>
      {
        romsRender
      }
    </>
  )
}

export default withFirebase(Roms)