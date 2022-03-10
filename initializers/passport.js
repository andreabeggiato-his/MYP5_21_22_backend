import passport from 'passport';
import passportHttpPackage from 'passport-http';

const { BasicStrategy } = passportHttpPackage;

const init = async () => {
  passport.use(new BasicStrategy((username, passowrd, done) => {
    console.log('PAssport basic strategy');
    console.log(username);
    console.log(passowrd);
  }));
};

export default init;
