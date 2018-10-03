import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import {
  Input,
  TextField,
  InputLabel,
  FormControl,
  InputAdornment,
  Button,
  Icon,
  IconButton,
  Grid,
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import VpnKey from '@material-ui/icons/VpnKey';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import AccountBox from '@material-ui/icons/AccountBox';

// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {
//       onFirstNameChange,
//       onLastNameChange,
//       onEmailChange,
//       onPasswordChange,
//       onZipcodeChange,
//       createAccount,
//     } = this.props;
const Login = ({
  onEmailChange,
  onPasswordChange,
  logIntoAccount,
  onClickShowPassword,
  showPassword,
  emailNotEntered,
  passwordNotEntered,
}) => (
  <div>
    <form>
      <Grid>
        <div>
          <TextField
            required
            error={emailNotEntered}
            id="login-email-address"
            label="Email"
            placeholder="drone@globex.com"
            onChange={event => onEmailChange(event.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
            }}
          />
        </div>
        <div>
          <FormControl required error={passwordNotEntered}>
            <InputLabel error={passwordNotEntered} htmlFor="login-password" className="password">Password</InputLabel>
            <Input
              error={passwordNotEntered}
              type={showPassword ? 'text' : 'password'}
              id="login-password"
              className="password"
              startAdornment={
                (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                )
              }
              endAdornment={
                (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={onClickShowPassword}
                      onMouseDown={event => event.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onChange={event => onPasswordChange(event.target.value)}
            />
          </FormControl>
        </div>
      </Grid>
      <Grid>
        <Button variant="contained" color="primary" className="log-into-account submit-form" onClick={() => logIntoAccount()}>
          Login
          <Icon><AccountBox /></Icon>
        </Button>
      </Grid>
    </form>
  </div>
);


Login.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  logIntoAccount: PropTypes.func.isRequired,
  onClickShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  emailNotEntered: PropTypes.bool.isRequired,
  passwordNotEntered: PropTypes.bool.isRequired,
};

// Signup.defaultProps = {
//   onFirstNameChange: event => event.target.value,
//   onLastNameChange: event => event.target.value,
//   onEmailChange: event => event.target.value,
//   onPasswordChange: event => event.target.value,
//   onZipcodeChange: event => event.target.value,
//   createAccount: event => event.target.value,
// };

export default hot(module)(Login);
