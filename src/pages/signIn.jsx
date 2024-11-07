import FormSignIn from "../components/Fragment/FormSignIn";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage