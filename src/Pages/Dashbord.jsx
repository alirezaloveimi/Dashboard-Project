// import usestate from react
import { useState } from "react";
// import some icons from react icons
import { FaWallet } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoDocumentText, IoWalletOutline, IoRocket } from "react-icons/io5";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
// import chart from react-apexcharts
import Chart from "react-apexcharts";

function Dashbord() {
  // sales chart option
  const [salesChartOption, setSalesChartOption] = useState({
    options: {
      legend: {
        show: false,
      },
      markers: {
        colors: ["#0075ff", "#2cd9ff"],
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0075ff", "#2cd9ff"],
      stroke: {
        curve: "smooth",
        lineCap: "butt",
        width: 4,
        colors: ["#0075ff", "#2cd9ff"],
      },
      theme: {
        mode: "dark",
      },
      grid: {
        strokeDashArray: 6,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
        background: "transparent",
      },
      fill: {
        colors: ["#0075ff", "#2cd9ff"],
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.2,
          opacityFrom: 0.6,
          opacityTo: 0.3,
          stops: [80, 90, 70],
        },
      },
      xaxis: {
        labels: {
          style: {
            colors: "#a0aec0",
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#a0aec0",
          },
        },
      },
    },
    series: [
      {
        name: "Mobile Apps",
        data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
      },
      {
        name: "Website",
        data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
      },
    ],
  });
  // users chart option
  const [userChartOption, setUserChartOption] = useState({
    series: [
      {
        name: "Sales",
        data: [330, 240, 110, 300, 490, 350, 270, 130, 425],
      },
    ],
    options: {
      colors: ["#dadbdf"],
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      theme: {
        mode: "dark",
      },
      chart: {
        background: "#070c27",
        toolbar: {
          show: false,
        },
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 1,
          columnWidth: "10%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          show: false,
        },
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  });

  return (
    <>
      {/* dashbord card boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-4 my-4">
        <div className="flex-between-center bg-blueBlackrGadient rounded-2.5xl p-4">
          <div className="space-y-1">
            <span className="text-secondary text-xs">Today Money</span>
            <h3 className="text-lg sm:text-xl flex items-center gap-x-2">
              $53,000
              <span className="text-green-400 text-sm font-bold">+55%</span>
            </h3>
          </div>
          <div className="icon-box">
            <FaWallet />
          </div>
        </div>
        <div className="flex-between-center bg-blueBlackrGadient rounded-2.5xl p-4">
          <div className="space-y-1">
            <span className="text-secondary text-xs">Today's Users</span>
            <h3 className="text-lg sm:text-xl flex items-center gap-x-2">
              $2,300
              <span className="text-green-400 text-sm font-bold">+3%</span>
            </h3>
          </div>
          <div className="icon-box">
            <AiOutlineGlobal />
          </div>
        </div>
        <div className="flex-between-center bg-blueBlackrGadient rounded-2.5xl p-4">
          <div className="space-y-1">
            <span className="text-secondary text-xs">New Clients</span>
            <h3 className="text-lg sm:text-xl flex items-center gap-x-2">
              $3,462
              <span className="text-red-600 text-sm font-bold">-2%</span>
            </h3>
          </div>
          <div className="icon-box">
            <IoDocumentText />
          </div>
        </div>
        <div className="flex-between-center bg-blueBlackrGadient rounded-2.5xl p-4">
          <div className="space-y-1">
            <span className="text-secondary text-xs">Total Sales</span>
            <h3 className="text-lg sm:text-xl flex items-center gap-x-2">
              $103,430
              <span className="text-green-400 text-sm font-bold">+5%</span>
            </h3>
          </div>
          <div className="icon-box">
            <FaShoppingCart />
          </div>
        </div>
      </div>

      {/* seconde card boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {/* welcome box */}
        <div className="welcome-box h-[340px] bg-cover bg-center px-6 py-8 rounded-2.5xl flex flex-col justify-between lg:col-span-2 xl:col-span-1">
          <div className="space-y-2">
            <span className="text-secondary text-xs sm:text-sm">
              Welcome back
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl">Mark Johnson</h3>
            <p className="text-secondary text-sm sm:text-base max-w-44 leading-6">
              Glad to see you again! Ask me anything.
            </p>
          </div>
          <span className="flex items-center cursor-pointer gap-x-2 text-sm transition-all duration-200 ease-ease hover:gap-x-3">
            Top To Record
            <FaArrowRight />
          </span>
        </div>

        {/* rate box */}
        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl lg:col-span-1">
          <h4 className="text-base sm:text-lg md:text-xl">Satisfaction Rate</h4>
          <span className="text-secondary text-sm mt-3">From All Projects</span>
          <div className="w-[200px] h-[200px] relative mx-auto my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="100 100 200 200"
              style={{ transform: "rotate(-90deg)", overflow: "visible" }}
            >
              <linearGradient
                id="grd_fz6lihg3wq7q"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
                gradientTransform="rotate(90, .5, .5)"
              >
                <stop offset="0" stopColor="rgba(0, 117, 255, 0)"></stop>
                <stop offset="100" stopColor="#0075ff"></stop>
              </linearGradient>
              <circle
                cx="200"
                cy="200"
                r="92.5"
                stroke="#22234B"
                strokeWidth="15"
                fill="none"
              ></circle>
              <circle
                cx="200"
                cy="200"
                r="92.5"
                fill="none"
                strokeWidth="15"
                strokeDasharray="581.1946409141117"
                strokeDashoffset="116.23892818282229"
                strokeLinecap="round"
                stroke="url(#grd_fz6lihg3wq7q)"
                style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
              ></circle>
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full grid place-content-center">
              <MdEmojiEmotions className="text-3xl" />
            </span>
          </div>
        </div>

        {/* Tracking box */}
        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl lg:col-span-1">
          <div className="flex-between-center">
            <h4 className="text-base sm:text-lg md:text-xl">
              Referral Tracking
            </h4>
            <span className="w-9 h-9 bg-[#22234b] grid place-content-center rounded-xl cursor-pointer">
              <BsThreeDots className="text-primary text-xl" />
            </span>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:items-center md:justify-between">
            <div className="space-y-4 xl:hidden">
              <div className="py-2 px-4 rounded-lg">
                <span className="text-secondary">Invited</span>
                <h5 className="text-lg">145 People</h5>
              </div>
              <div className="py-2 px-4 rounded-lg">
                <span className="text-secondary">Bonus</span>
                <h5 className="text-lg">34861</h5>
              </div>
            </div>
            <div className="w-[200px] h-[200px] relative mx-auto my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="100 100 200 200"
                style={{ transform: "rotate(-90deg)", overflow: "visible" }}
              >
                <linearGradient
                  id="grd_9ktjmz4qhqfa"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                  gradientTransform="rotate(90, .5, .5)"
                >
                  <stop offset="0" stopColor="rgba(5, 205, 153, 0)"></stop>
                  <stop offset="100" stopColor="#05CD99"></stop>
                </linearGradient>
                <circle
                  cx="200"
                  cy="200"
                  r="92.5"
                  stroke="transparent"
                  strokeWidth="15"
                  fill="none"
                ></circle>
                <circle
                  cx="200"
                  cy="200"
                  r="92.5"
                  fill="none"
                  strokeWidth="15"
                  strokeDasharray="581.1946409141117"
                  strokeDashoffset="174.3583922742335"
                  strokeLinecap="round"
                  stroke="url(#grd_9ktjmz4qhqfa)"
                  style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
                ></circle>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-secondary font-bold text-sm">Safety</span>
                <h2 className="text-5xl font-bold my-2">9.3</h2>
                <span className="text-secondary font-bold text-sm">
                  Total Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chart boxs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <div className="bg-blueBlackrGadient pt-6 px-4 pb-0 rounded-2.5xl">
          <h3 className="text-base sm:text-lg md:text-xl ml-4">
            Sales Overview
          </h3>
          <p className="text-secondary text-sm mt-2 ml-4">
            <span className="text-green-400">+5% More</span> in 2021
          </p>

          <div className="sales-chart">
            <Chart
              options={salesChartOption.options}
              series={salesChartOption.series}
              type="area"
              height={310}
              width={"100%"}
            />
          </div>
        </div>

        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl">
          <div className="user-chart">
            <Chart
              options={userChartOption.options}
              series={userChartOption.series}
              type="bar"
              height={220}
            />
          </div>
          <h4 className=" text-base sm:text-lg md:text-xl">Active Users</h4>
          <p className="text-secondary mt-2 text-sm">
            <span className="text-green-400">( +23 )</span> Then Last Week
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 sm:gap-x-12 lg:gap-x-10 my-5">
            <div className="space-y-3">
              <div className="flex items-center space-x-4 lg:space-x-2.5">
                <div className="icon-box w-10 h-10 lg:w-8 lg:h-8 rounded-lg">
                  <IoWalletOutline className="lg:text-base" />
                </div>
                <span className="text-secondary">Users</span>
              </div>
              <h5 className="text-lg">32,984</h5>
              <div className="progress w-full h-1 rounded-lg bg-[#2d2e5f]">
                <div className="child-progress w-2/5 h-1 bg-primary rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 lg:space-x-2.5">
                <div className="icon-box w-10 h-10 lg:w-8 lg:h-8 rounded-lg">
                  <IoRocket className="lg:text-base" />
                </div>
                <span className="text-secondary">Clicks</span>
              </div>
              <h5 className="text-lg">2,42M</h5>
              <div className="progress w-full h-1 rounded-lg bg-[#2d2e5f]">
                <div className="child-progress w-[70%] h-1 bg-primary rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 lg:space-x-2.5">
                <div className="icon-box w-10 h-10 lg:w-8 lg:h-8 rounded-lg">
                  <FaShoppingCart className="lg:text-base" />
                </div>
                <span className="text-secondary">Sales</span>
              </div>
              <h5 className="text-lg">2,400$</h5>
              <div className="progress w-full h-1 rounded-lg bg-[#2d2e5f]">
                <div className="child-progress w-1/4 h-1 bg-primary rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 lg:space-x-2.5">
                <div className="icon-box w-10 h-10 lg:w-8 lg:h-8 rounded-lg">
                  <HiMiniWrenchScrewdriver className="lg:text-base" />
                </div>
                <span className="text-secondary">Items</span>
              </div>
              <h5 className="text-lg">320</h5>
              <div className="progress w-full h-1 rounded-lg bg-[#2d2e5f]">
                <div className="child-progress w-[90%] h-1 bg-primary rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-6">
        {/* table box */}
        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl lg:flex-[2]">
          {/* table header */}
          <div className="flex-between-center">
            {/* table left side */}
            <div className="table-left">
              <h3 className="text-base sm:text-lg md:text-xl">Projects</h3>
              <div className="flex items-center space-x-2 mt-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="green"
                  height="15px"
                  width="15px"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "green" }}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
                <p className="text-secondary text-xs">
                  <span className="font-bold">30 Done</span> This Month
                </p>
              </div>
            </div>
            {/* table right side */}
            <div className="table-right">
              <BsThreeDotsVertical className="text-xl cursor-pointer" />
            </div>
          </div>

          <div className="overflow-x-auto mt-5 w-full">
            <table className="w-full border-collapse">
              {/* table header */}
              <thead>
                <tr className="border-b border-secondary">
                  <th className="text-left py-4 lg:py-3 text-secondary text-xs">
                    COMPANIES
                  </th>
                  <th className="p-4 lg:p-3 text-secondary text-xs">MEMBERS</th>
                  <th className="p-4 lg:p-3 text-secondary text-xs">BUDGET</th>
                  <th className="p-4 lg:p-3 text-secondary text-xs">
                    COMPLETION
                  </th>
                </tr>
              </thead>

              {/* table body */}

              <tbody>
                {/* table row 1 */}
                <tr className="border-b border-secondary">
                  {/* table column 1 */}
                  <td className="py-4 pr-7 lg:pr-0">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="flex-shrink-0"
                        width="20px"
                        height="20px"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_580_4009)">
                          <path
                            d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z"
                            fill="#470137"
                          ></path>
                          <path
                            d="M11.0168 5.625L8.51684 9.75L11.1835 14.125C11.2002 14.1583 11.2085 14.1917 11.2002 14.225C11.1918 14.2583 11.1585 14.2333 11.1085 14.2417H9.20018C9.06684 14.2417 8.97518 14.2333 8.91684 14.15C8.74184 13.8 8.55851 13.4583 8.38351 13.1083C8.20851 12.7667 8.01684 12.4167 7.81684 12.0583C7.61684 11.7 7.41684 11.3417 7.21684 10.975H7.20018C7.02518 11.3333 6.83351 11.6917 6.64184 12.05C6.45018 12.4083 6.25851 12.7667 6.07518 13.1167C5.88351 13.4667 5.69184 13.825 5.50018 14.1667C5.46684 14.25 5.40018 14.2583 5.30851 14.2583H3.47518C3.44184 14.2583 3.41684 14.275 3.41684 14.2333C3.40851 14.2 3.41684 14.1667 3.43351 14.1417L6.02518 9.89167L3.50018 5.61667C3.47518 5.58333 3.46684 5.55 3.48351 5.53333C3.50018 5.50833 3.53351 5.5 3.56684 5.5H5.45851C5.50018 5.5 5.54184 5.50833 5.57518 5.51667C5.60851 5.53333 5.63351 5.55833 5.65851 5.59167C5.81684 5.95 6.00018 6.30833 6.19184 6.66667C6.39184 7.025 6.58351 7.375 6.79184 7.725C6.99184 8.075 7.17518 8.425 7.35018 8.78333H7.36684C7.54184 8.41667 7.72518 8.05833 7.90851 7.70833C8.09184 7.35833 8.28351 7.00833 8.47518 6.65833C8.66684 6.30833 8.85018 5.95 9.03351 5.60833C9.04184 5.575 9.05851 5.54167 9.08351 5.525C9.11684 5.50833 9.15018 5.5 9.19184 5.50833H10.9502C10.9918 5.5 11.0335 5.525 11.0418 5.56667C11.0502 5.575 11.0335 5.60833 11.0168 5.625Z"
                            fill="#FF61F6"
                          ></path>
                          <path
                            d="M14.867 14.4167C14.2504 14.425 13.6337 14.3 13.0754 14.0417C12.5504 13.8 12.117 13.4 11.817 12.9083C11.5087 12.4 11.3587 11.7667 11.3587 11.0083C11.3504 10.3917 11.5087 9.78334 11.817 9.25001C12.1337 8.70834 12.592 8.25834 13.142 7.95834C13.7254 7.63334 14.4254 7.47501 15.2504 7.47501C15.292 7.47501 15.3504 7.47501 15.4254 7.48334C15.5004 7.49167 15.5837 7.49167 15.6837 7.50001V4.86667C15.6837 4.80834 15.7087 4.77501 15.767 4.77501H17.4587C17.5004 4.76667 17.5337 4.80001 17.542 4.83334C17.542 4.84167 17.542 4.85001 17.542 4.85001V12.7833C17.542 12.9333 17.5504 13.1 17.5587 13.2833C17.5754 13.4583 17.5837 13.625 17.592 13.7667C17.592 13.825 17.567 13.875 17.5087 13.9C17.0754 14.0833 16.617 14.2167 16.1504 14.3C15.7254 14.375 15.3004 14.4167 14.867 14.4167ZM15.6837 12.75V9.08334C15.6087 9.06667 15.5337 9.05001 15.4587 9.04167C15.367 9.03334 15.2754 9.02501 15.1837 9.02501C14.8587 9.02501 14.5337 9.09167 14.242 9.24167C13.9587 9.38334 13.717 9.59167 13.5337 9.85834C13.3504 10.125 13.2587 10.4833 13.2587 10.9167C13.2504 11.2083 13.3004 11.5 13.4004 11.775C13.4837 12 13.6087 12.2 13.7754 12.3667C13.9337 12.5167 14.1254 12.6333 14.342 12.7C14.567 12.775 14.8004 12.8083 15.0337 12.8083C15.1587 12.8083 15.2754 12.8 15.3837 12.7917C15.492 12.8 15.5837 12.7833 15.6837 12.75Z"
                            fill="#FF61F6"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_580_4009">
                            <rect
                              x="0.5"
                              y="0.5"
                              width="20"
                              height="19.5"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <h4 className="text-sm text-nowrap">
                        Chakra Vision UI Version
                      </h4>
                    </div>
                  </td>
                  {/* table column 2 */}
                  <td className="p-4 lg:p-3">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/avatar1.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar2.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar3.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar4.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                    </div>
                  </td>
                  {/* table column 3 */}
                  <td className="p-4 px-5 lg:px-0 lg:p-3">
                    <span className="text-center block">$1,399</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg mx-auto bg-[#2d2e5f] w-[128px]">
                      <div className="child-progress w-1/4 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 2 */}
                <tr className="border-b border-secondary">
                  {/* table column 1 */}
                  <td className="py-4 pr-7 lg:pr-0">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="flex-shrink-0"
                        width="20px"
                        height="20px"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.42676 9.23898C6.33498 9.11916 6.19949 9.04058 6.04991 9.02043C5.90034 9.00028 5.74888 9.0402 5.62867 9.13146C5.55795 9.18723 5.50091 9.25842 5.46189 9.3396L0.561756 19.1426C0.492353 19.2815 0.480953 19.4423 0.530062 19.5897C0.579171 19.737 0.68477 19.8588 0.823647 19.9283C0.904824 19.9694 0.994569 19.9906 1.08554 19.9903H7.91265C8.022 19.9931 8.12979 19.964 8.22282 19.9064C8.31585 19.8489 8.39009 19.7655 8.43643 19.6664C9.90992 16.6229 9.01673 11.9957 6.42676 9.23898Z"
                          fill="url(#paint0_linear_580_3991)"
                        ></path>
                        <path
                          d="M10.0284 0.318096C8.80686 2.19786 8.09495 4.36289 7.96253 6.60078C7.8301 8.83867 8.28172 11.0726 9.27306 13.0833L12.5646 19.6664C12.6133 19.7637 12.688 19.8455 12.7805 19.9027C12.873 19.9599 12.9796 19.9903 13.0884 19.9903H19.9141C19.9911 19.9905 20.0674 19.9755 20.1385 19.9461C20.2097 19.9167 20.2743 19.8736 20.3288 19.8191C20.3832 19.7647 20.4264 19.7001 20.4557 19.6289C20.4851 19.5577 20.5001 19.4815 20.5 19.4045C20.5 19.3137 20.4793 19.2241 20.4393 19.1426L11.025 0.31534C10.9803 0.220998 10.9097 0.141281 10.8215 0.0854577C10.7333 0.0296347 10.6311 0 10.5267 0C10.4223 0 10.3201 0.0296347 10.2319 0.0854577C10.1436 0.141281 10.0731 0.220998 10.0284 0.31534V0.318096Z"
                          fill="#2684FF"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_580_3991"
                            x1="9.12424"
                            y1="10.7373"
                            x2="3.94981"
                            y2="19.6995"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0052CC"></stop>
                            <stop offset="0.92" stopColor="#2684FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <h4 className="text-nowrap text-sm">
                        Add Progress Track
                      </h4>
                    </div>
                  </td>
                  {/* table column 2 */}
                  <td className="p-4 lg:p-3">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/avatar3.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar4.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                    </div>
                  </td>
                  {/* table column 3 */}
                  <td className="p-4 px-5 lg:px-0 lg:p-3">
                    <span className="text-center block">$3,000</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg mx-auto bg-[#2d2e5f] w-[128px]">
                      <div className="child-progress w-1/2 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 3 */}
                <tr className="border-b border-secondary">
                  {/* table column 1 */}
                  <td className="py-4 pr-7 lg:pr-0">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="flex-shrink-0"
                        width="20px"
                        height="20px"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_580_3474)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.83241 0.500046C6.72684 0.500882 5.83208 1.41868 5.8329 2.54963C5.83208 3.68058 6.72766 4.59837 7.83323 4.59921H9.83356V2.55046C9.83437 1.41952 8.9388 0.501718 7.83241 0.500046C7.83323 0.500046 7.83323 0.500046 7.83241 0.500046V0.500046ZM7.83241 5.96671H2.49984C1.39427 5.96755 0.498697 6.88535 0.499514 8.01629C0.49788 9.14724 1.39345 10.065 2.49902 10.0667H7.83241C8.93798 10.0659 9.83355 9.14808 9.83274 8.01713C9.83355 6.88535 8.93798 5.96755 7.83241 5.96671Z"
                            fill="#36C5F0"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.4998 8.01629C20.5006 6.88535 19.605 5.96755 18.4994 5.96671C17.3938 5.96755 16.4983 6.88535 16.4991 8.01629V10.0667H18.4994C19.605 10.0659 20.5006 9.14808 20.4998 8.01629ZM15.1664 8.01629V2.54963C15.1672 1.41952 14.2724 0.501718 13.1668 0.500046C12.0613 0.500882 11.1657 1.41868 11.1665 2.54963V8.01629C11.1649 9.14724 12.0604 10.065 13.166 10.0667C14.2716 10.0659 15.1672 9.14808 15.1664 8.01629Z"
                            fill="#2EB67D"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1659 21C14.2714 20.9992 15.167 20.0814 15.1662 18.9505C15.167 17.8195 14.2714 16.9017 13.1659 16.9009H11.1655V18.9505C11.1647 20.0806 12.0603 20.9984 13.1659 21ZM13.1659 15.5325H18.4992C19.6048 15.5317 20.5004 14.6139 20.4996 13.483C20.5012 12.352 19.6056 11.4342 18.5001 11.4325H13.1667C12.0611 11.4334 11.1655 12.3512 11.1663 13.4821C11.1655 14.6139 12.0603 15.5317 13.1659 15.5325Z"
                            fill="#ECB22E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.499512 13.4829C0.498695 14.6139 1.39427 15.5317 2.49984 15.5325C3.60541 15.5317 4.50098 14.6139 4.50017 13.4829V11.4333H2.49984C1.39427 11.4342 0.498695 12.352 0.499512 13.4829ZM5.8329 13.4829V18.9496C5.83127 20.0805 6.72684 20.9983 7.83241 21C8.93798 20.9992 9.83355 20.0814 9.83274 18.9504V13.4846C9.83437 12.3536 8.9388 11.4358 7.83323 11.4342C6.72684 11.4342 5.83208 12.352 5.8329 13.4829C5.8329 13.4829 5.8329 13.4838 5.8329 13.4829Z"
                            fill="#E01E5A"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_580_3474">
                            <rect
                              x="0.5"
                              y="0.500046"
                              width="20"
                              height="20.5"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <h4 className="text-nowrap text-sm">
                        Fix Platform Errors
                      </h4>
                    </div>
                  </td>
                  {/* table column 2 */}
                  <td className="p-4 lg:p-3">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/avatar1.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar2.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                    </div>
                  </td>
                  {/* table column 3 */}
                  <td className="p-4 px-5 lg:px-0 lg:p-3">
                    <span className="text-center block">Not Set</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg mx-auto bg-[#2d2e5f] w-[128px]">
                      <div className="child-progress w-10/12 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 4 */}
                <tr className="border-b border-secondary">
                  {/* table column 1 */}
                  <td className="py-4 pr-7 lg:pr-0">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="flex-shrink-0"
                        width="20px"
                        height="20px"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_580_3455)">
                          <path
                            d="M10.5 1.52588e-05C4.97697 1.52588e-05 0.5 4.47699 0.5 10C0.5 15.523 4.97697 20 10.5 20C16.023 20 20.5 15.523 20.5 10C20.5 4.47767 16.023 0.00069762 10.5 1.52588e-05ZM15.0861 14.4224C14.9067 14.7172 14.5225 14.8093 14.2291 14.6298C11.8811 13.1948 8.92511 12.8707 5.44439 13.6657C5.10867 13.7428 4.77431 13.5326 4.69788 13.1969C4.62078 12.8612 4.83026 12.5268 5.16667 12.4504C8.97561 11.5804 12.2434 11.955 14.8794 13.5654C15.1728 13.7462 15.2663 14.129 15.0861 14.4224ZM16.3096 11.7005C16.0838 12.0676 15.6034 12.1822 15.2369 11.957C12.5498 10.305 8.45155 9.8267 5.27243 10.7916C4.86029 10.9164 4.42494 10.6837 4.29939 10.2723C4.1752 9.86013 4.40788 9.42547 4.81934 9.29991C8.45087 8.1979 12.9661 8.73151 16.0524 10.6285C16.4195 10.8543 16.5355 11.334 16.3096 11.7005ZM16.4147 8.86457C13.1912 6.95054 7.87427 6.77449 4.79683 7.70796C4.3028 7.85808 3.78011 7.579 3.63067 7.08497C3.48124 6.59094 3.75964 6.06825 4.25435 5.91813C7.78693 4.84614 13.6586 5.0529 17.3693 7.25556C17.8135 7.51963 17.9596 8.0935 17.6962 8.53703C17.4335 8.98193 16.8582 9.12864 16.4147 8.86457Z"
                            fill="#2EBD59"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_580_3455">
                            <rect
                              x="0.5"
                              y="1.52588e-05"
                              width="20"
                              height="20"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <h4 className="text-nowrap text-sm">
                        Launch our Mobile App
                      </h4>
                    </div>
                  </td>
                  {/* table column 2 */}
                  <td className="p-4 lg:p-3">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/avatar1.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar2.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar3.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                      <img
                        src="/assets/images/avatar4.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                    </div>
                  </td>
                  {/* table column 3 */}
                  <td className="p-4 px-5 lg:px-0 lg:p-3">
                    <span className="text-center block">$22,987</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg mx-auto bg-[#2d2e5f] w-[128px]">
                      <div className="child-progress w-3/4 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 5 */}
                <tr className="border-b border-secondary">
                  {/* table column 1 */}
                  <td className="py-4 pr-7 lg:pr-0">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="flex-shrink-0"
                        width="20px"
                        height="20px"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_580_3885)">
                          <path
                            d="M18.687 -0.000793457H2.31305C1.31172 -0.000793457 0.5 0.810925 0.5 1.81225V18.1862C0.5 19.1875 1.31172 19.9992 2.31305 19.9992H18.687C19.6883 19.9992 20.5 19.1875 20.5 18.1862V1.81225C20.5 0.810925 19.6883 -0.000793457 18.687 -0.000793457Z"
                            fill="#DC395F"
                          ></path>
                          <path
                            d="M7.18379 6.29259C7.84863 6.29259 8.40559 5.7715 8.40559 5.08853C8.40559 4.40603 7.84863 3.88501 7.18379 3.88501C6.51895 3.88501 5.96215 4.40603 5.96215 5.08853C5.96215 5.77142 6.51895 6.29259 7.18379 6.29259ZM4.65051 12.7395C4.57871 13.0449 4.5427 13.3748 4.5427 13.6439C4.5427 14.7041 5.11762 15.4079 6.33941 15.4079C7.3527 15.4079 8.17418 14.8062 8.76566 13.8346L8.40449 15.284H10.4166L11.5666 10.6716C11.8541 9.50377 12.4111 8.8976 13.2556 8.8976C13.9204 8.8976 14.3336 9.31103 14.3336 9.99354C14.3336 10.1913 14.3156 10.4067 14.2437 10.6403L13.6507 12.7604C13.5609 13.0659 13.5251 13.3715 13.5251 13.6588C13.5251 14.6653 14.1179 15.4014 15.3576 15.4014C16.4177 15.4014 17.2621 14.719 17.7293 13.0839L16.9388 12.7788C16.5435 13.8742 16.2021 14.0722 15.9325 14.0722C15.663 14.0722 15.5193 13.8927 15.5193 13.5335C15.5193 13.3718 15.5554 13.1924 15.6091 12.9763L16.1842 10.9108C16.3279 10.4258 16.3818 9.99572 16.3818 9.60057C16.3818 8.05541 15.4475 7.249 14.3156 7.249C13.2556 7.249 12.1775 8.20517 11.6386 9.2115L12.0337 7.40525H8.96152L8.53027 8.99619H9.9677L9.08254 12.5399C8.38746 14.0851 7.11066 14.1102 6.95043 14.0743C6.68731 14.0149 6.51902 13.915 6.51902 13.5731C6.51902 13.3759 6.55496 13.0925 6.6448 12.7509L7.99246 7.40525H4.57871L4.14746 8.99619H5.56676L4.65059 12.7395"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_580_3885">
                            <rect
                              x="0.5"
                              y="-0.000793457"
                              width="20"
                              height="20"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <h4 className="text-nowrap text-sm">
                        Redesign New Online Shop
                      </h4>
                    </div>
                  </td>
                  {/* table column 2 */}
                  <td className="p-4 lg:p-3">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/avatar4.webp"
                        alt="table avatar"
                        className="w-6 h-6 rounded-full cursor-pointer -ml-[10px] hover:scale-125 transition-all ease-ease flex-shrink-0"
                      />
                    </div>
                  </td>
                  {/* table column 3 */}
                  <td className="p-4 px-5 lg:px-0 lg:p-3">
                    <span className="text-center block">$9,000</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg mx-auto bg-[#2d2e5f] w-[128px]">
                      <div className="child-progress w-[10%] h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* overview box */}
        <div className="bg-blueBlackrGadient p-6 rounded-2.5xl lg:flex-[1]">
          {/* overview header */}
          <div className="overview-header">
            <h3 className="text-base sm:text-lg md:text-xl">Orders Overview</h3>
            <div className="flex items-center space-x-2 mt-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                color="green"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "green" }}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="text-secondary text-xs">
                <span className="font-bold">+30% </span> This Month
              </p>
            </div>
          </div>

          {/* overview body */}
          <div className="overview-body mt-5 space-y-5">
            <div className="overview-box flex items-center gap-x-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                color="#0075ff"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(0, 117, 255)" }}
              >
                <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
              </svg>
              <div className="space-y-1.5">
                <h4 className="text-white font-bold text-xs sm:text-base">
                  $2400, Design changes
                </h4>
                <p className="text-secondary text-xs">22 DEC 7:20 PM</p>
              </div>
            </div>
            <div className="overview-box flex items-center gap-x-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#e31a1a"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(227, 26, 26)" }}
              >
                <path d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z"></path>
              </svg>
              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-base">New order #1832412</h4>
                <p className="text-secondary text-xs">21 DEC 11 PM</p>
              </div>
            </div>
            <div className="overview-box flex items-center gap-x-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                color="#4299e1"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(66, 153, 225)" }}
              >
                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
              </svg>
              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-base">
                  Server payments for April
                </h4>
                <p className="text-secondary text-xs">21 DEC 9:34 PM</p>
              </div>
            </div>
            <div className="overview-box flex items-center gap-x-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                color="#9f7aea"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(159, 122, 234)" }}
              >
                <title></title>
                <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"></path>
              </svg>
              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-base">$2400, Design changes</h4>
                <p className="text-secondary text-xs">22 DEC 7:20 PM</p>
              </div>
            </div>
            <div className="overview-box flex items-center gap-x-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                color="#0075ff"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(0, 117, 255)" }}
              >
                <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
              </svg>
              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-base">
                  New card added for order #4395133
                </h4>
                <p className="text-secondary text-xs">18 DEC 4:54 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
