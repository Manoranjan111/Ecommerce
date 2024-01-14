import { React, useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
  height: 85vh;
  width: 110vh;
  padding: 0;
  padding-top: 0;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 81.2%;
  width: 28%;
  padding: 45px 35px;
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
    padding: 10px 30px;
    margin-top: 10px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 10px;
    }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641b;
  color: #fff;
  height: 48px;
  font-weight: 600;
  border-radius: 2px;
`;

const RequestOtpButton = styled(Button)`
  text-transform: none;
  background: #f8641b;
  color: #fff;
  height: 48px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const ExistingUserLogin = styled(Button)`
  text-transform: none;
  background: #ffffff;
  color: #2874f0;
  height: 48px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const SubHeading = styled(Typography)`
    color: #dbdbdb;
    font-size: 16px;
    font-weight: 400;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161; 
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subheading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: 'Sign up with your mobile number to get started'
  }
}

const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  username: '',
  email: '',
  mobileNumber: '',
  password: ''
};


const LoginDialog = ({ open, setOpen }) => {

  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValues); 
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const {setAccount} = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  }
  const toggleLogin = () => {
    toggleAccount(accountInitialValue.login);
  }

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name] : e.target.value });
    console.log(signup);
  }
  const onValueChange = (e) => {
    setLogin({...login, [e.target.name] : e.target.value });
    console.log(login);
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200){
      handleClose();
      setAccount(login.username);
    }else{
      setError(true);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5" style={{ marginBottom: 15 }}>{account.heading}</Typography>
            <SubHeading> {account.subheading} </SubHeading>
          </Image>

          {
            account.view === 'login' ?
              <Wrapper>
                <TextField variant="standard" onChange={ (e) => onValueChange(e) } name="username" label="Enter Email/Phone number" />
                { error &&<Error>Please Enter Valid username or Password.</Error>}
                <TextField variant="standard" onChange={ (e) => onValueChange(e) } name="password" label="Enter Password" />
                <Text style={{ marginTop: 20 }}>By Contining, you agree to flipkart's Terms of use and Privacy Policy.</Text>
                <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <RequestOtpButton>Request OTP</RequestOtpButton>
                <CreateAccount onClick={() => toggleSignup()}>New to flipkart? Create an account</CreateAccount>
              </Wrapper>
              :

              <Wrapper>
                <TextField variant="standard" onChange={ (e) => onInputChange(e) } name="username" label="Enter Name" />
                <TextField variant="standard" onChange={ (e) => onInputChange(e) } name="email" label="Enter Email" />
                <TextField variant="standard" onChange={ (e) => onInputChange(e) } name="mobileNumber" label="Enter Mobile Number" />
                <TextField variant="standard" onChange={ (e) => onInputChange(e) } name="password" label="Enter Password" />
                <Text style={{ marginTop: 20 }}>By Contining, you agree to flipkart's Terms of use and Privacy Policy.</Text>
                <LoginButton onClick={() => signupUser()}>CONTINUE</LoginButton>
                <ExistingUserLogin onClick={() => toggleLogin()}>Existing User? Log in</ExistingUserLogin>
              </Wrapper>
          }
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog
