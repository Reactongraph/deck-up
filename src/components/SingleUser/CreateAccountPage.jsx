import { useLocation, useNavigate } from "react-router-dom";
import CommonLoginLayout from "../common/CommonLoginLayout";
import CreateAccountForm from "./CreateAccountForm";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoginWithGoogleMutation,
  useRegisterUserMutation,
} from "../../store/auth/authApiSlice";
import { useEffect } from "react";
import { setEmail } from "../../store/auth/authSlice";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";

export default function CreateAccountPage() {
  const [loginAPi, { data, isLoading }] = useRegisterUserMutation();
  const [googleLoginPostApi] = useLoginWithGoogleMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get("user");

  localStorage.setItem("userType", userType);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    dispatch(setEmail(email));
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
    localStorage.setItem("email", email);
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const tokenResponse = result._tokenResponse;

        localStorage.setItem("email", tokenResponse.email);
        localStorage.setItem("idToken", tokenResponse.idToken);

        try {
          const responseData = await googleLoginPostApi(
            tokenResponse.email,
            tokenResponse.localId
          );
          if (responseData.data.message === "Email verified") {
            localStorage.removeItem("idToken");
            localStorage.setItem(
              "accessToken",
              responseData.data.tokens.accessToken
            );
            localStorage.setItem(
              "refreshToken",
              responseData.data.tokens.refreshToken
            );

            toast.success("Google login successfully");

            setTimeout(() => {
              localStorage.setItem("loginSource", "login");
              navigate("/account-details");
            }, 3000);
          }
        } catch (error) {
          console.log("error: ", error);
          toast.error(error?.response?.data?.error);
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
