import './App.css';
import Login from './login';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
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
