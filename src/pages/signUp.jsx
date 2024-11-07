import FormSignUp from "../components/Fragment/FormSignUp";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;