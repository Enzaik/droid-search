import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Roms from '../../components/Roms/Roms'

const Rroms = (props) => {


    return (
        <>
            <CssBaseline />
            {/* <Container maxWidth="sm"> */}
                <Roms {...props}/>
            {/* </Container> */}
        </>


    );
}

export default Rroms;