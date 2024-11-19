import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../common/CommonButton";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PaymentPage() {
  const navigate = useNavigate();

  const handleGoDashboard = () => {
    navigate("/dashboard");
  };

  const pdfRef = useRef(null);

  const handleDownload = async () => {
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
    <div className="flex justify-center pt-16 bg-lightBlue h-full">
      <div className="flex gap-11 bg-white rounded-[10px] w-[69.7%] pb-16 pt-[89px] pl-20 pr-[66px]">
        <div className="w-[48%]">
          <div className="w-full bg-lighCyan px-[54px] py-[27px] rounded-[6px]">
            <div className="flex gap-1">
              <h2 className="text-2xl leading-[29.05px] font-semibold text-paleBlue font-inter">
                Payment Successful
              </h2>
              <img src="/images/check_circle.svg" alt="" />
            </div>
            <CommonButton
              text={
                <div
                  className="flex gap-2 items-start"
                  onClick={handleDownload}
                >
                  <img
                    src="/images/Vector.svg"
                    alt="icon"
                    width="18px"
                    height="19px"
                  />
                  <p>Invoice for the payment</p>
                </div>
              }
              className="w-full mt-[21px] flex justify-center items-center border rounded-lg text-darkBlue border-secondary hover:bg-paleBlue hover:text-white"
            />
          </div>
          <div className="w-full flex mt-[38px] mb-8 rounded-[10px]">
            <div
              ref={pdfRef}
              className="w-[60%] flex flex-col gap-6 bg-lightGrayShade pl-6 pb-[34px] pt-[46px]"
            >
              <p className="leading-[19.05px] text-bodyColor font-inter">
                Thank you for choosing Deckup!
              </p>
              <div className="flex gap-1 items-start">
                <img
                  src="/images/family_star.svg"
                  alt="icon"
                  width="20px"
                  height="19px"
                />
                <p className="leading-[19.05px] text-darkBlue font-inter">
                  Happy Decking Up
                </p>
              </div>
            </div>
            <div className="w-[40%] bg-lighCyan pt-4 pl-[17px] text-paleBlue flex flex-col gap-[34px] justify-center items-center text-center pr-[18px] pb-[18px]">
              {/* <div
                className="flex flex-col justify-center items-center"
                onClick={handleDownload}
              >
                <img
                  src="/images/download.svg"
                  alt="icon"
                  width="20px"
                  height="20px"
                />
                <p className="font-semibold">Download link</p>
              </div> */}

              <CommonButton
                text={
                  <div
                    className="flex flex-col justify-center items-center gap-2"
                    onClick={handleDownload}
                  >
                    <img
                      src="/images/download.svg"
                      alt="icon"
                      width="20px"
                      height="20px"
                    />
                    <p className="font-semibold">Download link</p>
                  </div>
                }
                className="hover:bg-transparent"
              />
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/share.svg"
                  alt="icon"
                  width="20px"
                  height="20px"
                />
                <p className="font-semibold">Share</p>
              </div>
            </div>
          </div>

          <div>
            <CommonButton
              type="button"
              onClick={handleGoDashboard}
              className="font-inter group relative w-full h-[42px] flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white text-[14px] bg-primary hover:bg-red-500"
              text={"Go to dashboard"}
            />
          </div>
        </div>
        <div className="border-r border-borderGray" />
        <div className="w-[52%]">
          <h2 class="font-semibold text-paleBlue leading-[29.05px] text-2xl mb-6">
            How it works!
          </h2>
          <div class="flex flex-wrap gap-4 w-full">
            <div class="bg-white shadow-lg rounded-lg flex flex-col items-center p-[22px] pt-[22px] pb-[17px] w-[188px] justify-between min-h-[170px]">
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
            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[188px] justify-between min-h-[170px]">
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

            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[188px] justify-between min-h-[170px]">
              <div class="flex-1 items-center flex">
                <img src="/images/email.svg" alt="folder" />
              </div>
              <div class="flex-1">
                <p class="text-primary font-semibold pt-3">STEP 3</p>
                <p class="text-bodyColor">Login using registered email ID</p>
              </div>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center pt-[22px] pb-[17px] w-[188px] justify-between min-h-[170px]">
              <div class="flex-1 items-center flex">
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
}