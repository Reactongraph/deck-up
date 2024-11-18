import { useNavigate } from "react-router-dom";
import CommonLoginLayout from "../common/CommonLoginLayout";
import CreateAccountForm from "./CreateAccountForm";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../../store/auth/authApiSlice";
import { useEffect } from "react";
import { setEmail } from "../../store/auth/authSlice";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";
import { googleLoginPostApiRequest } from "../../helper/helper";

export default function CreateAccountPage() {
  const [loginAPi, { data, isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    dispatch(setEmail(email));
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    if (!isLoading && data?.message === "OTP sent to your email please check") {
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        dispatch(setEmail(storedEmail));
      }
      dispatch(setEmail(email));

      setTimeout(() => {
        localStorage.setItem("loginSource", "createAccount");
        navigate("/verify-mail");
      }, 3000);
    }
  }, [data, isLoading, dispatch, email, navigate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    loginAPi(email);
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        localStorage.setItem("email", user.email);

        try {
          const responseData = await googleLoginPostApiRequest(
            user.email,
            user.uid
          );
          console.log("Google Login Success:", user, responseData);

          toast.success("Google login successfully");

          setTimeout(() => {
            navigate("/setup");
          }, 3000);
        } catch (error) {
          console.log("error: ", error);
          toast.error(
            error?.response?.data?.error || "Something went wrong. Try again"
          );
        }
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <>
      <CommonLoginLayout
        form={
          <CreateAccountForm
            email={email}
            isLoading={isLoading}
            handleEmailChange={handleEmailChange}
            handleOtpLogin={handleFormSubmit}
            handleGoogleLogin={handleGoogleLogin}
          />
        }
      />
    </>
  );
}
