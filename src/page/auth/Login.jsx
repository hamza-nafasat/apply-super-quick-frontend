import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Lock from '../../assets/svgs/auth/Lock';
// import Mail from '../../assets/svgs/auth/Mail';
// import Button from '../../components/shared/small/Button';
import TextField from '../../components/shared/small/TextField';
import Button from '../../components/shared/small/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  //   const [loginUser, { isLoading }] = useLoginMutation('');

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please fill all the fields');
    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log('response while login ', response);
      if (response?.success) {
        dispatch(userExist(response?.data));
        toast.success(response?.message);
        return navigate('/dashboard');
      }
    } catch (error) {
      console.log(' Error While Logging In', error);
      toast.error(error?.data?.message || 'Error occurred while logging in');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <article className=" flex flex-col rounded-2xl bg-gray-200 gap-4 p-4">
        <h2 className="text-center text-2xl xl:text-4xl  font-[700] ">Login</h2>
        <form className="flex flex-col gap-5 p-1" onSubmit={formSubmitHandler}>
          <TextField
            //   Icon={<Mail />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            autoFocus
            required
          />
          <TextField
            //   Icon={<Lock />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <section className="border-primary-lightGray p-4 flex justify-between items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <input
                className="w-3 xl:w-6 h-3 xl:h-6 border-none outline-none "
                type="checkbox"
                name="check"
                checked={checked}
                onChange={() => setChecked(!checked)}
                id="check"
              />
              <p
                className="select-none text-[12px] xl:text-[1rem]"
                onClick={() => setChecked(!checked)}
              >
                Remember Me
              </p>
            </div>

            <Link
              to={'/forget-password'}
              className="border-none outline-none bg-transparent text-primary-lightBlue text-[12px] xl:text-[1rem] font-[500]"
            >
              Forget Password?
            </Link>
          </section>
          <Button height="h-[48px]" text="Login" bg="bg-blue-400" />
        </form>

        <section className="flex w-full items-center justify-center gap-4 text-[12px] xl:text-[1rem]">
          <p>New User?</p>
          <Link to={'/signup'} className="text-primary-lightBlue">
            Signup
          </Link>
        </section>
      </article>
    </div>
  );
};

export default Login;
