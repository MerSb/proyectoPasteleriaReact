import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <SignIn />
      </div>
      <div className="w-full md:w-1/2">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInSignUp;
