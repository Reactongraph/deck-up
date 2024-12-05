import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useCustomNavigation from "../../Hooks/useCustomNavigation";
import { updateField } from "../../store/single-user/accountSlice";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import CommonLoginLayout from "../common/CommonLoginLayout";
import { AccountDetailsSchema } from "../../form-validations/AccountDetailsSchema";
import {
  useCreateAccountMutation,
  useFetchCountriesQuery,
  useFetchStatesQuery,
  useFetchUsersDetailsQuery,
} from "../../store/single-user/accountApiSlice";
import { toast } from "react-toastify";
import CommonAccountForm from "./CommonAccountForm";
import { setNestedValue } from "../../helper/helper";
import { skipToken } from "@reduxjs/toolkit/query";

export default function AccountDetailsForm({
  dashboardPage = false,
  CompanyInfo = [],
}) {
  console.log("COmpanyInfo", CompanyInfo);
  const dispatch = useDispatch();
  const navigate = useCustomNavigation();
  const [createUserApi, { isLoading }] = useCreateAccountMutation();
  const {
    firstName,
    lastName,
    companyName,
    addressLineOne,
    addressLineTwo,
    city,
    zip,
    country,
    state,
  } = useSelector((state) => state.account);
  const { data: countries } = useFetchCountriesQuery();
  const { data: states } = useFetchStatesQuery(country || skipToken);

  const [billingCountry, setBillingCountry] = useState("");
  const { data: billingStates } = useFetchStatesQuery(
    billingCountry || skipToken
  );

  const email = localStorage.getItem("email");
  const accountData = JSON.parse(localStorage.getItem("accountData"));
  const userType = localStorage.getItem("userType");

  const { data: userDetails } = useFetchUsersDetailsQuery(email);

  const [stateOptions, setStateOptions] = useState([]);
  const [billingStateOptions, setBillingStateOptions] = useState([]);
  const [isSameAsAbove, setIsSameAsAbove] = useState(true);
  const [billingAddresss, setBillingAddresss] = useState({
    firstName: "",
    lastName: "",
    addressLineOne: "",
    city: "",
    country: "",
    state: "",
  });

  useEffect(() => {
    if (userDetails) {
      if (
        userDetails[0]?.first_name !== "" ||
        userDetails[0]?.last_name !== ""
      ) {
        navigate("/dashboard");
      }

      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  useEffect(() => {
    if (country && states) {
      setStateOptions(
        states.map((state) => ({ label: state.name, value: state.code }))
      );
    } else if (country) {
      setStateOptions([]);
    }
  }, [country, states]);

  useEffect(() => {
    if (billingCountry && billingStates) {
      setBillingStateOptions(
        billingStates.map((state) => ({ label: state.name, value: state.code }))
      );
    } else {
      setBillingStateOptions([]);
    }
  }, [billingCountry, billingStates]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("billingAddress.")) {
      const updatedBillingAddress = setNestedValue(
        name.replace("billingAddress.", ""),
        value,
        billingAddresss
      );
      setBillingAddresss(updatedBillingAddress);

      dispatch(
        updateField({ field: "billingAddress", value: updatedBillingAddress })
      );
      if (name === "billingAddress.country") {
        setBillingCountry(value);
      }
    } else {
      dispatch(updateField({ field: name, value }));
      if (name === "country") {
        dispatch(updateField({ field: "country", value }));
      }
    }
  };
  const handleSubmit = async (values) => {
    console.log("handleSubmit", values);
    try {
      const response = await createUserApi(values).unwrap();
      localStorage.setItem("accountData", JSON.stringify(values));
      if (userDetails) {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
      }

      if (response.redirect_url) {
        toast.success("Account created successfully!");
        window.location.href = response.redirect_url;
        // window.open(response.redirect_url, "_blank");
      } else {
        toast.error("No URL provided in response.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create account. Please try again.");
    }
  };
  const accountDetailsForm = (
    <Formik
      initialValues={{
        firstName:
          firstName ||
          accountData?.first_name ||
          userDetails?.[0]?.first_name ||
          "",
        lastName:
          lastName ||
          accountData?.last_name ||
          userDetails?.[0]?.last_name ||
          "",
        email: email || accountData?.email || "",
        companyName:
          companyName ||
          accountData?.companyName ||
          CompanyInfo?.organisation ||
          "",
        addressLineOne:
          addressLineOne ||
          accountData?.addressLineOne ||
          CompanyInfo?.address?.address1 ||
          "",
        addressLineTwo:
          addressLineTwo ||
          accountData?.addressLineTwo ||
          CompanyInfo?.address?.address2 ||
          "",
        itemPriceId: "cbdemo_sample_plan-inr-monthly",
        city: city || accountData?.city || CompanyInfo?.address?.city || "",
        zip: zip || accountData?.zip || CompanyInfo?.address?.postalcode || "",
        country: country || accountData?.country || "",
        state: state || accountData?.state || "",
        licenseType:
          userType === "Singleuser"
            ? "individual"
            : userType === "Multiuser"
            ? "team"
            : accountData?.licenseType || "",
        billingAddress: isSameAsAbove
          ? {
              firstName:
                firstName ||
                accountData?.billingAddress?.firstName ||
                userDetails?.[0]?.first_name ||
                "",
              lastName:
                lastName ||
                accountData?.billingAddress?.lastName ||
                userDetails?.[0]?.last_name ||
                "",
              email: email || accountData?.billingAddress?.email || "",
              companyName:
                companyName ||
                accountData?.billingAddress?.companyName ||
                CompanyInfo?.organisation ||
                "",
              addressLineOne:
                addressLineOne ||
                accountData?.billingAddress?.addressLineOne ||
                CompanyInfo?.address?.address1 ||
                "",
              addressLineTwo:
                addressLineTwo ||
                accountData?.billingAddress?.addressLineTwo ||
                CompanyInfo?.address?.address2 ||
                "",
              city:
                city ||
                accountData?.billingAddress?.city ||
                CompanyInfo?.address?.city ||
                "",
              zip:
                zip ||
                accountData?.billingAddress?.zip ||
                CompanyInfo?.address?.postalcode ||
                "",
              country:
                billingCountry ||
                country ||
                accountData?.billingAddress?.country ||
                "",
              state: state || accountData?.billingAddress?.state || "",
            }
          : { ...billingAddresss, email },
        redirectUrl: `${window.location.origin}/invoice`,
      }}
      validationSchema={AccountDetailsSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, values }) => {
        return (
          <Form>
            <h2 className="text-subhead text-paleBlue font-inter">
              Account Details
            </h2>
            <CommonAccountForm
              handleFieldChange={handleFieldChange}
              values={values}
              touched={touched}
              errors={errors}
              email={email}
              stateOptions={stateOptions}
              prefix={""}
              setStateOptions={setStateOptions}
              countryOptions={
                countries
                  ? countries?.map((country) => ({
                      label: country.name,
                      value: country.value,
                    }))
                  : []
              }
            />
            <div className="w-full my-6 border-t border-borderGray" />

            <div className="flex items-center justify-between mr-[45px]">
              <h2 className="text-body sm:text-subhead text-paleBlue font-inter">
                Billing address
              </h2>
              <div className="flex items-center gap-2">
                <CommonInput
                  type="checkbox"
                  name="billing-address"
                  checked={isSameAsAbove}
                  onChange={() => setIsSameAsAbove(!isSameAsAbove)}
                  className="w-[18px] h-[18px]"
                />
                <p className="text-sm font-inter leading-[16.94px] text-bodyColor">
                  Same as above
                </p>
              </div>
            </div>

            {!isSameAsAbove && (
              <CommonAccountForm
                handleFieldChange={handleFieldChange}
                values={values.billingAddress}
                touched={touched.billingAddress || {}}
                errors={errors.billingAddress || {}}
                email={email}
                stateOptions={billingStateOptions}
                prefix="billingAddress."
                setStateOptions={setBillingStateOptions}
                countryOptions={
                  countries
                    ? countries.map((country) => ({
                        label: country.name,
                        value: country.value,
                      }))
                    : []
                }
              />
            )}

            <CommonButton
              type="submit"
              className="font-inter group relative w-full mt-10 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white bg-primary hover:bg-red-500"
              text={isLoading ? "Loading..." : "Go for payment"}
            />
          </Form>
        );
      }}
    </Formik>
  );

  return (
    <>
      {dashboardPage ? (
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 order-2 lg:order-1">
          <div className="max-w-[536px] bg-white w-full rounded-xl shadow-xl pt-[32px] pr-[24px] pb-[56px] pl-[24px] sm:pr-[80px] sm:pl-[80px]">
            {accountDetailsForm}
          </div>
        </div>
      ) : (
        <CommonLoginLayout form={accountDetailsForm} className="pb-[58px]" />
      )}
    </>
  );
}
