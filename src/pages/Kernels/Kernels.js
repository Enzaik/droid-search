import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Kernels from '../../components/Kernels/Kernels'

const kernels = (props) => {

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Kernels {...props}/>
            </Container>
        </>


    );
}

export default kernels;