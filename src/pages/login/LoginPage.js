import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { checkUser } from '../../redux/actions/index';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isEmail: false,
      isPassword: false,
      emailErrorMessage: "",
      passwordErrorMessage: ""
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isUser !== this.props.isUser) {
      this.props.history.push('/dashboard')
    }else{
      alert("Please enter valied details");
    }
  }
  emailTextChangeHandler = (event) => {
    if (this.ValidateEmail(event.target.value)) {
      this.setState({
        username: event.target.value,
        emailErrorMessage: "", isEmail: false
      });
    } else {
      this.setState({ emailErrorMessage: "You have entered an invalid email address!", isEmail: true });
    }

  }
  passwordTextChangeHandler = (event) => {
    if (this.checkPassword(event.target.value)) {
      this.setState({
        password: event.target.value,
        passwordErrorMessage: "", isPassword: false
      });
    } else {
      this.setState({ passwordErrorMessage: "Password must contain at least six characters!", isPassword: true });
    }
    this.setState({ password: event.target.value });
  }
  doLoging = (event) => {
    event.preventDefault();

    let { username, password } = this.state;
    if (username !== "" && password !== "") {
      let data = {
        username: username,
        password: password
      }
      this.props.checkUser(data);
    } else {
      alert("Please enter email and password")
    }

  }
  ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }
  checkPassword = (pwd) => {
    if (pwd.length < 6) {
      return (false)
    }
    return (true)
  }
  render() {
    console.log(this.props.isUser)
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={this.state.isEmail}
              helperText={this.state.emailErrorMessage}
              autoComplete="email"
              autoFocus
              onChange={this.emailTextChangeHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={this.state.isPassword}
              helperText={this.state.passwordErrorMessage}
              autoComplete="current-password"
              onChange={this.passwordTextChangeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.doLoging.bind(this)}
              className={useStyles.submit}
            >
              Login
          </Button>

          </form>
        </div>
      </Container>
    )
  }
}
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    padding: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const mapStateToProps = state => {
  return {
    isUser: state.employee.isUser
  };
};
function mapDispatchToProps(dispatch) {
  return {
    checkUser: (data) => dispatch(checkUser(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)