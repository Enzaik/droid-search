import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../firebase'

class SignInWithGoogleBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    handleClick = e => {
        if (!this.props.user) {
            this.props.firebase
                .doSignInWithGoogle()
                .then(user => {
                    localStorage.setItem('displayName', user.user.displayName);
                    localStorage.setItem('email', user.user.email);
                    localStorage.setItem('photoURL', user.user.photoURL);
                    window.location = '/home';
                }).catch(error => {
                    console.log('error', error)
                })
        }
        else {
            this.props.firebase
                .doSignOut();
            localStorage.removeItem('displayName');
            localStorage.removeItem('email');
            localStorage.removeItem('photoURL');
            window.location = '/';
        }
    }


    render() {
        return (
            <MenuItem onClick={this.handleClick}>{this.props.user ? "Sign Out" : "Sign In"}</MenuItem>
        )

    }
}

const SignInWithGoogle = compose(
    withFirebase,
    withRouter
)(SignInWithGoogleBase)


export { SignInWithGoogle };