import React, { useState } from 'react';
import { SIGNUP_PHONE_MUTATION, CONFIRM_OTP } from '../GraphQL/Mutations';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import PhoneInput from 'react-phone-input-2';

export default function Register() {
  const [countryCode, setCountryCode] = useState('1');
  const [phone, setPhone] = useState('');
  const [token, setToken] = useState('');
  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(false);
  const router = useRouter();

  const [signUp, { data, loading, error }] = useMutation(
    SIGNUP_PHONE_MUTATION,
    {
      onCompleted({ signUp }) {
        if (signUp) {
          localStorage.setItem('token', signUp);
          // setToken(signUp);
        }
      },
    }
  );

  const [confirm, { otpConfrim, loadingOtp, errorOtp }] = useMutation(
    CONFIRM_OTP,
    {
      onCompleted({ confirm }) {
        if (confirm) {
          console.log('jwt token ', confirm);
        }
      },
    }
  );

  //Sent OTP
  const signin = () => {
    if (phone === '' || phone.length < 10) return;

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    // console.log('phone ', phone, 'countryCode ', countryCode);

    signUp({
      variables: {
        phoneNumber: phone,
        phoneCountryCode: countryCode,
      },
    });

    setShow(true);
    const responseToken = localStorage.getItem('token');
    setToken(responseToken);
  };

  // validate OTP
  const ValidateOtp = () => {
    if (otp === null) return;

    if (loadingOtp) return 'Submitting...';
    if (errorOtp) return `Submission error! ${error.message}`;

    confirm({
      variables: {
        storeId: token,
        code: otp,
      },
    });

    router.push('./submit');
    // console.log('phone ', phone, 'countryCode ', countryCode);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div
        className="bg-white shadow-md rounded px-6 pt-8 pb-10 mb-6"
        style={{ marginTop: '100px' }}
      >
        <center>
          <div className="mb-4 " style={{ display: !show ? 'block' : 'none' }}>
            <div className="grid grid-cols-2 gap-1">
              <PhoneInput
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                  disabled: true,
                }}
                country={'us'}
                value={countryCode}
                onChange={setCountryCode}
                inputStyle={{
                  width: '50px',
                  height: '50px',
                  fontSize: '10px',
                  paddingLeft: '4px',
                }}
                containerStyle={{
                  width: '150px',
                  height: '50px',
                  fontSize: '10px',
                  paddingLeft: '4px',
                }}
              />
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <br />
            <div
              className="md:flex md:items-center"
              type="button"
              id="recaptcha-container"
            >
              <div className="md:w-1/3"></div>
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded  focus:outline-none focus:shadow-outline"
                onClick={signin}
              >
                Next
              </button>
            </div>
          </div>
          <div style={{ display: show ? 'block' : 'none' }}>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={'Enter your OTP'}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded  focus:outline-none focus:shadow-outline"
              onClick={ValidateOtp}
            >
              Verify
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}
