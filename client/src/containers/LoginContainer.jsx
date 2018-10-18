import { connect } from 'react-redux';
import {
  updateEmail,
  updatePassword,
  logIntoAccount,
  toggleShowPassword,
} from '../actions/actions';
import Login from '../components/Login';


const mapDispatchToProps = dispatch => ({
  onEmailChange: email => dispatch(updateEmail(email)),
  onPasswordChange: password => dispatch(updatePassword(password)),
  logIntoAccount: () => dispatch(logIntoAccount()),
  onClickShowPassword: () => dispatch(toggleShowPassword()),
});

const mapStateToProps = ({
  showPassword,
  emailNotEntered,
  passwordNotEntered,
  loginFailureReason,
}) => ({
  showPassword,
  emailNotEntered,
  passwordNotEntered,
  loginFailureReason,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
