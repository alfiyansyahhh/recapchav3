import { useState } from 'react';
import useRecaptcha from './hooks/useCapcha';

const Login = () => {
  const { validateRecaptcha } = useRecaptcha();
  const [tokenC, settoken]: any = useState();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await validateRecaptcha();

    if (!token) return;
    settoken(token);
    console.log(token);
  };
  return (
    <div>
      <div>login</div>
      <br />
      <button onClick={handleSubmit}>get token</button>
      <br />
      <br />
      <div>{tokenC}</div>
    </div>
  );
};

export default Login;
