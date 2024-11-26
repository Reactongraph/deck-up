import axios from "axios";
import dayjs from "dayjs";

export const googleLoginPostApiRequest = async (email, uid) => {
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

export const checkUserTrailApiRequest = async (email) => {
  const url = process.env.REACT_APP_FIREBASE_APP_URL;

  try {
    const response = await axios.post(
      url,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error during user check API request:", error);
    throw error;
  }
};

export const years = Array.from({ length: 10 }, (_, i) => ({
  label: `${new Date().getFullYear() + i}`,
  value: new Date().getFullYear() + i,
}));

export const setNestedValue = (keyPath, value, baseObject = {}) => {
  const keys = keyPath.split(".");
  return keys.reduceRight((acc, key, index) => {
    if (index === keys.length - 1) {
      return { ...baseObject, [key]: value };
    }
    return { ...baseObject, [key]: acc };
  }, baseObject);
};

export const formatDate = (dateString) => {
  try {
    const date = dayjs(dateString);

    if (!date.isValid()) {
      console.error("Invalid date format:", dateString);
      return null;
    }

    const formattedDate = date.format("DD MMM YYYY");

    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error);
    return null;
  }
};

export const formatCurrency = (currency, amount) => {
  if (!currency || !amount) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};
