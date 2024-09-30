import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Misalnya, jika Anda menggunakan library ini

const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const validateRecaptcha = async () => {
    if (!executeRecaptcha) {
      alert('Execute recaptcha not yet available');
      console.log('Execute recaptcha not yet available');
      return null;
    }

    const token = await executeRecaptcha('submit_form');

    if (!token) {
      alert('reCAPTCHA validation failed, please try again.');
      return null;
    }

    return token;
  };

  return { validateRecaptcha };
};

export default useRecaptcha;
