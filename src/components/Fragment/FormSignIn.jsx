import Button from "../Element/Button"
import CheckBox from "../Element/CheckBox"
import LabeledInput from "../Element/LabeledInput"

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        {/* ambil dari element/LabeledInput */}
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        {/* ambil dari element/LabeledInput */}
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <div className="mb-3">
        {/* ambil dari element/CheckBox */}
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      {/* ambil dari element/Button */}
      <Button variant="bg-primary w-full text-white" type="submit">
	      Login
      </Button>
    </form>
  );
};

export default FormSignIn;
