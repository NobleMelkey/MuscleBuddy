import React, { useState } from 'react';
// import { TextField } from '@mui/material';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';


const Verify = () => {
  const [phone, setPhone] = useState('+91');
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate=useNavigate();
  const [confirmationResult, setConfirmationResult] = useState(null);
   const handleClick=()=>
   {navigate('/dashboard')
   }
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      }
    }, auth);
  }

  const handleSend = () => {
    if (phone.trim().length !== 13) {
      alert('Please enter a valid phone number');
      return;
    }
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  }

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        let user = result.user;
        console.log(user);
        alert('User signed in successfully');
      }).catch((error) => {
        alert('User couldn\'t sign in (bad verification code?)');
      });
    }
  }
  const handleVerify = () => {
    if (confirmationResult) {
      confirmationResult.confirm(otp)
        .then((result) => {
          let user = result.user;
          console.log(user);
          alert('User signed in successfully');
          // Move the navigation logic here, only when OTP is correct
          handleClick(); // This line navigates to the next page
        })
        .catch((error) => {
      alert('User couldn\'t sign in (bad verification code?)');
    });
  }
  }
  const handlecombineClick=()=>{
    handleVerify();
    handleClick();
  }
  return (
    <div className='app__container'>
       <center><h3 style={{ color: 'rgb(201, 131, 1)',fontSize: '44px' }}><b>Bookmarks</b></h3></center>
      {hasFilled ? (
        <>
        <div id='sign_in'>
        <h2 className='Enterotp' >Enter the OTP</h2>
      </div>
<TextField
          sx={{ width: '240px' }}
          variant='outlined'
          label='OTP'
          value={otp}
          onChange={verifyOtp}
        />
         <button className='butt'
            onClick={handlecombineClick}
            variant='contained'
           
          >
            {'Verify OTP'}
          </button>
        </>
        
      ) : (
        <>
        <div id='sign_in'>
      <h2>Sign in to your account</h2>
    </div>
         <div><PhoneIcon fontSize='large' /></div>
      
          <TextField
            variant='outlined'
            autoComplete='off'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <button className='butt'
            onClick={handleSend}
            variant='contained'
            sx={{ width: '240px', marginTop: '20px' }}
          >
            {'Get OTP'}
          </button>
        </>
      )}

      <div id="recaptcha"></div>
      
    </div>
  );
}

export default Verify;