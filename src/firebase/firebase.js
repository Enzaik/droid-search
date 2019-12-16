import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBoDZVioLcc7rZ7RUwOJfWZzZv4LOcgZMo",
  authDomain: "enz-droid-search.firebaseapp.com",
  databaseURL: "https://enz-droid-search.firebaseio.com",
  projectId: "enz-droid-search",
  storageBucket: "enz-droid-search.appspot.com",
  messagingSenderId: "73836873566",
  appId: "1:73836873566:web:ee4d1268786686618831cf",
  measurementId: "G-2GCMM0349M"
};

/*

    apiKey: "AIzaSyBoDZVioLcc7rZ7RUwOJfWZzZv4LOcgZMo",
    authDomain: "enz-droid-search.firebaseapp.com",
    databaseURL: "https://enz-droid-search.firebaseio.com",
    projectId: "enz-droid-search",
    storageBucket: "enz-droid-search.appspot.com",
    messagingSenderId: "73836873566",
    appId: "1:73836873566:web:ee4d1268786686618831cf",
    measurementId: "G-2GCMM0349M"


*/


class Firebase {
  constructor() {
    app.initializeApp(config);
    app.analytics();

    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();

  }

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });
  doSignInWithGoogle = () => {
    // this.auth.signInWithPopup(this.googleProvider).then(user => {
    //   localStorage.setItem('displayName', user.user.displayName);
    //   localStorage.setItem('email', user.user.email);
    //   localStorage.setItem('photoURL', user.user.photoURL);
    // });
    return this.auth.signInWithPopup(this.googleProvider);
  }

  doSignOut = () => this.auth.signOut();
}

export default Firebase;