import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { compose } from 'recompose';


import { withFirebase } from '../../firebase'

class SignInWithGoogleBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    handleClick = e => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(user => {
                console.log('from component');
                localStorage.setItem('displayName', user.user.displayName);
                localStorage.setItem('email', user.user.email);
                localStorage.setItem('photoURL', user.user.photoURL);
            });
    }


    render() {
        return (
            <MenuItem onClick={this.handleClick}>Yeah</MenuItem>
        )

    }
}

const SignInWithGoogle = compose(
    withFirebase
)(SignInWithGoogleBase)


export { SignInWithGoogle };