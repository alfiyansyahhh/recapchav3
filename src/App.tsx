import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './login';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <GoogleReCaptchaProvider reCaptchaKey="6LeWQFMqAAAAAOP-waxdxJXEdpA49Ibn8TvfBjma">
          <Login />
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
}

export default App;
