import axios from "axios";

const googleLoginPostApiRequest = async (email, uid) => {
  const url = process.env.REACT_APP_FIREBASE_APP_URL;

  try {
    const response = await axios.post(url, {
      email,
      uid,
    });

    return response.data;
  } catch (error) {
    console.error("Error during Google login API request:", error);
    throw error;
  }
};

export default googleLoginPostApiRequest;
