import axios from "axios";

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
  if (!dateString) return ""; 
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); 
  const year = date.getFullYear();

  const getOrdinalSuffix = (n) => {
    if (n % 10 === 1 && n % 100 !== 11) return "st";
    if (n % 10 === 2 && n % 100 !== 12) return "nd";
    if (n % 10 === 3 && n % 100 !== 13) return "rd";
    return "th";
  };

  const ordinalSuffix = getOrdinalSuffix(day);
  return `${day}${ordinalSuffix} ${month} ${year}`;
};

export const formatCurrency = (currency, amount) => {
  if (!currency || !amount) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};
