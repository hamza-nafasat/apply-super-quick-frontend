import { useState } from 'react';
import TextField from '../../components/shared/small/TextField';
import logo from '../../assets/images/logo.png';
import Button from '@/components/shared/small/Button';

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex min-h-full w-2xl flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-32 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <TextField type="email" label={'Email'} />
            </div>

            <div>
              <div className="mt-2">
                <TextField type="password" label={'Password'} />

                <div className="mt-4 flex items-center justify-end">
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button label="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
