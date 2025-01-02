import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// import { useCheckUserExistsQuery } from "../store/auth/authApiSlice";
// import { useSelector } from "react-redux";
// import { selectAuthState } from "../store/auth/authSlice";

const SetupPage = () => {
  // const { email } = useSelector(selectAuthState);

  // const { data, isLoading, error } = useCheckUserExistsQuery(email);

  const pdfRef = useRef(null);

  const downloadPdf = async () => {
    try {
      const canvas = await html2canvas(pdfRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("DeckUp_Setup.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div class="bg-blue-50 flex items-center justify-center min-h-[91vh]">
      <div class="w-full max-w-4xl text-center">
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-paleBlue pb-1">
            Thank you for choosing DeckUp!
          </h1>
          <p class="text-bodyColor pb-2">
            Download the setup file and follow the steps given below
          </p>
          {/* {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error checking user registration status.</p>
          ) : ( */}
            <button
              onClick={downloadPdf}
              className={`mt-4 bg-primary hover:bg-hoverButton text-white font-medium py-3 px-4 rounded-full inline-flex items-center cursor-not-allowed opacity-50`}
              // disabled={data.userExists}
            >
              <img
                className="mr-2"
                src="/images/downloadIcon.svg"
                alt="downloadIcon"
              />
              Download setup file
            </button>
          {/* )} */}
          {/* {data?.userExists && (
            <p className="text-red-600 font-medium mt-2">
              You are already registered and cannot proceed to the next step.
            </p>
          )} */}
        </div>

        <div ref={pdfRef}>
          <h2 class="font-semibold text-paleBlue mb-4 mt-16 text-2xl">
            How it works!
          </h2>
          <div class="flex gap-[15px] flex-row flex-wrap lg:flex-nowrap px-[20px] lg:px-[0px]">
            <div class="bg-white shadow-lg rounded-lg flex flex-col items-center p-[22px] pt-[22px] pb-[17px] w-[213px] justify-between flex-1 flex-[100%] sm:flex-[calc(50%-12px)] lg:flex-none min-h-[180px] lg:min-h-fit">
              <div class="flex-1 items-center flex">
                {" "}
                <img src="/images/folder.svg" alt="folder" />
              </div>
              <div class="flex-1">
                <p class="text-primary font-semibold pt-3">STEP 1</p>
                <p class="text-bodyColor">
                  Find the installer in your downloads folder
                </p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[213px] justify-between flex-1 flex-[100%] sm:flex-[calc(50%-12px)] lg:flex-none min-h-[180px] lg:min-h-fit">
              <div class="flex-1 items-center flex">
                <img src="/images/click.svg" alt="folder" />
              </div>
              <div class="flex-1">
                <p class="text-primary font-semibold pt-3">STEP 2</p>
                <p class="text-bodyColor">
                  Install DeckUp by double-clicking on the file
                </p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[213px] justify-between flex-1 flex-[100%] sm:flex-[calc(50%-12px)] lg:flex-none min-h-[180px] lg:min-h-fit">
              <div class="flex-1 items-center flex">
                <img src="/images/email.svg" alt="folder" />
              </div>
              <div class="flex-1">
                <p class="text-primary font-semibold pt-3">STEP 3</p>
                <p class="text-bodyColor">Login using registered email ID</p>
              </div>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[213px] justify-between flex-1 flex-[100%] sm:flex-[calc(50%-12px)] lg:flex-none min-h-[180px] lg:min-h-fit">
              <div class="flex-1 items-center flex">
                {" "}
                <img src="/images/deckup.svg" alt="folder" />
              </div>
              <div class="flex-1">
                <p class="text-primary font-semibold pt-3">STEP 4</p>
                <p class="text-bodyColor">Ready to DeckUp!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
