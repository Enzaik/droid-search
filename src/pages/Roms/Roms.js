import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Roms from '../../components/Roms/Roms'

const roms = (props) => {
    
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                
                <Roms />
            </Container>
        </>

       
     );
}

export default roms;