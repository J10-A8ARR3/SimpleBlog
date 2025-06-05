import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import RedirectMessage from '../components/RedirectMessage';

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form action="/register" method="POST" className="space-y-6">
        <InputField label="Full Name:" type="text" id="name" name="name" required />
        <InputField label="Email:" type="email" id="email" name="email" required />
        <InputField label="Password:" type="password" id="password" name="password" required />
        <InputField label="Confirm Password:" type="password" id="confirmPassword" name="confirmPassword" required />
        <SubmitButton text="Register" />
      </form>

      <RedirectMessage
        message="Already have an account?"
        linkText="Login here"
        linkHref="/login"
      />
    </div>
  );
};

export default Register;
