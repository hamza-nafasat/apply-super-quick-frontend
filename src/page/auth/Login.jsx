import { useState } from 'react';
import TextField from '../../components/shared/small/TextField';
import logo from '../../assets/images/logo.png';
import Button from '@/components/shared/small/Button';

// const features = [
//   'Monitor campaign performance',
//   'Access detailed analytics',
//   'Manage your subscribers',
//   'Launch new giveaways',
// ];

const Login = () => {
  return (
    <div className="montserrat-font flex md:flex-row flex-col h-screen w-full items-center justify-center bg-white gap-4 "> 
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center h-full  mt-20 md:mt-1 ">
        <h1 className="text-4xl font-bold mb-8">
          Welcome <span className="text-medium">Back</span>
        </h1>
        <p className="text-lg text-gray-500 font-semibold mb-8 max-w-md">
          Sign in to your account to manage your giveaways, view analytics, and grow your email list.
        </p>
        {/* <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center font-semibold text-gray-700 text-base">
              <span className="text-blue-600 mr-3">✓</span>
              {feature}
            </li>
          ))}
        </ul> */}
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center w-full md:w-1/2 max-w-md bg-white rounded-xl shadow-2xl p-10 ">
        <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
        <p className="mb-6 text-md font-semibold">
          Or <a href="#" className="text-blue-600 hover:underline text-medium">create a new account</a>
        </p>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <TextField type="email" label={'Email address'} containerClassName="bg-blue-50 !border-gray-300" className='!text-gray-500' />
          </div>
          <div>
            <TextField type="password" label={'Password'} containerClassName="bg-blue-50 !border-gray-300" className='!text-gray-500' />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-500 font-semibold">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-medium hover:underline text-sm font-semibold">Forgot password?</a>
          </div>
          <Button label="Sign in" className="w-full bg-blue-600 hover:!bg-medium hover:!text-white text-medium !border !border-medium !rounded-[20px]" />
        </form>
        {/* <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
          <span>Se connecter avec Google</span>
        </button> */}
        <p className="mt-6 text-center text-sm text-gray-600 font-semibold">
          Don't have an account yet?{' '}
          <a href="#" className="text-medium  hover:underline font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
