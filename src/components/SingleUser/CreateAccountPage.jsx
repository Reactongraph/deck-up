import { useNavigate } from "react-router-dom";
import CommonLoginLayout from "../common/CommonLoginLayout";
import CreateAccountForm from "./CreateAccountForm";
// import AccountDetailsForm from "./AccountDetailsForm";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  const handleOtpLogin = () => {
    navigate("/verify-mail");
  };

  const handleGoogleLogin = () => {
    // navigate("/verify-mail");
  };
  return (
    <>
      <CommonLoginLayout
        form={
          <CreateAccountForm
            handleOtpLogin={handleOtpLogin}
            handleGoogleLogin={handleGoogleLogin}
          />
        }
      />
      {/* <CommonLoginLayout
        form={
          <AccountDetailsForm
          // handleOtpLogin={handleOtpLogin}
          // handleGoogleLogin={handleGoogleLogin}
          />
        }
        className="pb-[58px]"
      /> */}
    </>
  );
}
