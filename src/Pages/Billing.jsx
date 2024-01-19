import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaArrowDown } from "react-icons/fa6";

function Billing() {
  return (
    <div className="billing-content">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* left side */}
        <div className="flex flex-col gap-5 flex-[2]">
          {/* top side */}
          <div className="flex flex-col gap-5 xl:flex-row">
            {/* top first child */}
            <div className="vision-box p-6 xl:pb-0 rounded-2.5xl flex-1">
              {/* vision-box-header */}
              <div className="vision-header flex-between-center py-3">
                <h3 className="text-lg sm:text-xl md:text-2xl">Vision UI</h3>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  color="white"
                  height="48px"
                  width="48px"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "white" }}
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z"></path>
                  </g>
                </svg>
              </div>
              {/* vision-box-body */}
              <div className="mt-12">
                <h4 className="text-base sm:text-lg md:text-2xl">
                  7812&nbsp;&nbsp;&nbsp;2139&nbsp;&nbsp;&nbsp;0823&nbsp;&nbsp;&nbsp;7916
                </h4>
                <div className="flex items-center gap-x-6 mt-4">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-[10px] font-bold opacity-80">
                      VALID THRU
                    </span>
                    <span className="font-bold">05/24</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-[10px] font-bold opacity-80">
                      CVV
                    </span>
                    <span className="font-bold"> 09X</span>
                  </div>
                </div>
              </div>
            </div>

            {/* top seconde child */}
            <div className="bg-blueBlackrGadient p-6 xl:pb-0 rounded-2.5xl flex-1">
              {/* Credit-box-header */}
              <div className="credit-box-header p-5 rounded-[18px] bg-center bg-cover space-y-3">
                <div className="flex-between-center">
                  <h6 className="text-xs md:text-base">Credit Balance</h6>
                  <BsThreeDots className="text-xl cursor-pointer" />
                </div>
                <div className="flex-between-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl">$25,215</h2>
                  <img src="/assets/images/graph-billing.b9f0ef12.svg" />
                </div>
              </div>

              <div className="credit-box-body mt-4 mb-2">
                <span className="text-secondary font-bold text-[10px]">
                  NEWEST
                </span>
                <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between py-4 sm:gap-0">
                  <div className="flex items-center gap-x-4">
                    <div className="w-12 h-12 rounded-full grid place-content-center bg-[#22294eb3]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        color="#01b574"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "rgb(1, 181, 116)" }}
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Bill & Taxes</h4>
                      <span className="text-secondary text-sm">
                        Today, 16:36
                      </span>
                    </div>
                  </div>
                  <span className="font-bold">-$154.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* bottom side */}
          <div className="bg-blueBlackrGadient p-6 rounded-2.5xl">
            <div className="flex-between-center">
              <h5 className="text-xs sm:text-sm md:text-lg">Payment Method</h5>
              <button
                type="button"
                className="py-2 px-5 rounded-lg bg-primary font-bold text-xs text-nowrap transition-all duration-200 ease-ease hover:scale-105"
              >
                Add New Card
              </button>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <div className="border border-gray-500 p-4 flex items-center gap-4 rounded-xl flex-1">
                <svg
                  width="21px"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.63158"
                    cy="7.49999"
                    r="6.63158"
                    fill="#EB001B"
                  ></circle>
                  <circle
                    cx="14.3685"
                    cy="7.49999"
                    r="6.63158"
                    fill="#F79E1B"
                  ></circle>
                </svg>
                <span className="font-bold text-sm">7812 2139 0823 XXXX</span>
              </div>
              <div className="border border-gray-500 p-4 flex items-center gap-4 rounded-xl flex-1">
                <svg
                  width="25px"
                  viewBox="0 0 25 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349V2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.902 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="font-bold text-sm">7812 2139 0823 XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 bg-blueBlackrGadient p-6 rounded-2.5xl">
          <div className="flex-between-center">
            <h4 className="sm:text-lg md:text-xl">Invoices</h4>
            <button
              type="button"
              className="py-1.5 px-6 font-bold rounded-lg bg-primary text-xs transition-all duration-200 ease-ease hover:scale-105"
            >
              View All
            </button>
          </div>

          <ul className="flex flex-col gap-y-6 mt-[15px]">
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h5>March, 01, 2020</h5>
                <p className="text-secondary text-sm">#MS-415646</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="text-secondary text-sm">$180</span>
                <span className="flex items-center text-secondary text-sm">
                  <IoDocumentTextSharp className="font-bold mr-1.5" />
                  PDF
                </span>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h5>March, 01, 2020</h5>
                <p className="text-secondary text-sm">#MS-415646</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="text-secondary text-sm">$180</span>
                <span className="flex items-center text-secondary text-sm">
                  <IoDocumentTextSharp className="font-bold mr-1.5" />
                  PDF
                </span>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h5>March, 01, 2020</h5>
                <p className="text-secondary text-sm">#MS-415646</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="text-secondary text-sm">$180</span>
                <span className="flex items-center text-secondary text-sm">
                  <IoDocumentTextSharp className="font-bold mr-1.5" />
                  PDF
                </span>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h5>March, 01, 2020</h5>
                <p className="text-secondary text-sm">#MS-415646</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="text-secondary text-sm">$180</span>
                <span className="flex items-center text-secondary text-sm">
                  <IoDocumentTextSharp className="font-bold mr-1.5" />
                  PDF
                </span>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <h5>March, 01, 2020</h5>
                <p className="text-secondary text-sm">#MS-415646</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span className="text-secondary text-sm">$180</span>
                <span className="flex items-center text-secondary text-sm">
                  <IoDocumentTextSharp className="font-bold mr-1.5" />
                  PDF
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl">
          <h4 className="text-lg md:text-xl">Billing Information</h4>

          <ul className="mt-5 space-y-7">
            <li className="information-box p-6 rounded-2xl">
              <div className="flex-between-center">
                <span className="font-bold">Oliver Liam</span>
                <span className="text-red-600 flex font-bold items-center gap-x-1.5 cursor-pointer">
                  <MdDelete />
                  Delete
                </span>
              </div>
              <p className="text-secondary text-xs sm:text-sm mt-4 leading-6">
                Company Name: Stone Tech Zone <br />
                Email Address: lucas@stone-tech.com <br />
                VAT Number: FRB1235476
              </p>
            </li>
            <li className="information-box p-6 rounded-2xl">
              <div className="flex-between-center">
                <span className="font-bold">Lucas Harper</span>
                <span className="text-red-600 flex font-bold items-center gap-x-1.5 cursor-pointer">
                  <MdDelete />
                  Delete
                </span>
              </div>
              <p className="text-secondary text-xs sm:text-sm mt-4 leading-6">
                Company Name: Stone Tech Zone <br />
                Email Address: lucas@stone-tech.com <br />
                VAT Number: FRB1235476
              </p>
            </li>
            <li className="information-box p-6 rounded-2xl">
              <div className="flex-between-center">
                <span className="font-bold">Ethan James</span>
                <span className="text-red-600 flex font-bold items-center gap-x-1.5 cursor-pointer">
                  <MdDelete />
                  Delete
                </span>
              </div>
              <p className="text-secondary text-xs sm:text-sm mt-4 leading-6">
                Company Name: Fiber Notion <br />
                Email Address: ethan@fiber.com VAT <br />
                Number: FRB1235476
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl">
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-0">
            <h4 className="text-lg md:text-xl">Your Transaction's</h4>
            <span className="text-secondary font-bold flex items-center gap-x-2">
              <SlCalender className="text-white" />
              23-30 March2020
            </span>
          </div>

          <p className="text-secondary font-bold my-5 text-sm">NEWEST</p>

          <ul className="space-y-7">
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-red-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-red-700 text-xs" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">NetFlix</h6>
                  <p className="text-secondary text-xs">
                    27 March 2020, at 12:30 PM
                  </p>
                </div>
              </div>
              <span className="text-red-700 font-bold text-sm">- $ 2,500</span>
            </li>
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-green-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-green-700 text-xs rotate-180" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">Apple</h6>
                  <p className="text-secondary text-xs">
                    27 March 2020, at 04:30 AM
                  </p>
                </div>
              </div>
              <span className="text-green-700 font-bold text-sm">
                + $ 2,000
              </span>
            </li>
          </ul>

          <p className="text-secondary font-bold my-5 text-sm">YESTERDAY</p>

          <ul className="space-y-7">
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-green-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-green-700 text-xs rotate-180" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">Stripe</h6>
                  <p className="text-secondary text-xs">
                    26 March 2020, at 13:45 PM
                  </p>
                </div>
              </div>
              <span className="text-green-700 font-bold text-sm">+ $ 750</span>
            </li>
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-green-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-green-700 text-xs rotate-180" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">HubSpot</h6>
                  <p className="text-secondary text-xs">
                    26 March 2020, at 12:30 PM
                  </p>
                </div>
              </div>
              <span className="text-green-700 font-bold text-sm">
                + $ 1,000
              </span>
            </li>
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-green-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-green-700 text-xs rotate-180" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">Samsung</h6>
                  <p className="text-secondary text-xs">
                    27 October 2013, at 04:30 AM
                  </p>
                </div>
              </div>
              <span className="text-green-700 font-bold text-sm">
                + $ 931,000
              </span>
            </li>
            <li className="flex-between-center">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 border border-green-700 rounded-full grid place-items-center">
                  <FaArrowDown className="text-green-700 text-xs rotate-180" />
                </div>
                <div className="space-y-1">
                  <h6 className="text-sm sm:text-base">Apple</h6>
                  <p className="text-secondary text-xs">
                    27 March 2020, at 04:30 AM
                  </p>
                </div>
              </div>
              <span className="text-green-700 font-bold text-sm">
                + $ 2,000
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Billing;
