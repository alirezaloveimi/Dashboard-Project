import { useState, useEffect } from "react";
import EditModal from "../Components/EditModal";
// import some icons
import { BsThreeDotsVertical } from "react-icons/bs";
// import toast componet and there style
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  // state for show edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  // states for user id and user info obj
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState("");
  // states for inputs
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserJob, setNewUserJob] = useState("");
  const [newUserStatus, setNewUserStatus] = useState(false);
  const [newUserEmplyed, setNewUserEmplyed] = useState("");

  // function for get all data
  const getAllData = async () => {
    try {
      const req = await fetch(
        "https://dashbord-51768-default-rtdb.firebaseio.com/users.json"
      );
      const response = await req.json();
      setAllUsers(Object.entries(response));
    } catch (err) {
      console.log(err);
      toast.error(`${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // useEffect for get all user Data
  useEffect(() => {
    getAllData();
  }, []);

  // useEffect for show Current User Info
  useEffect(() => {
    if (Object.keys(userInfo).length) {
      setNewUserName(userInfo.name);
      setNewUserEmail(userInfo.email);
      setNewUserJob(userInfo.job);
      setNewUserStatus(userInfo.status);
      setNewUserEmplyed(userInfo.emplyed);
    }
  }, [userInfo]);

  // update user info
  const updateUserInfo = async () => {
    const updateObj = {
      name: newUserName,
      email: newUserEmail,
      job: newUserJob,
      status: newUserStatus,
      emplyed: newUserEmplyed,
    };

    if (
      !newUserName.length ||
      !newUserEmail.length ||
      !newUserJob.length ||
      !newUserEmplyed.length
    ) {
      toast.error("Please fill in the blank fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      try {
        const req = await fetch(
          `https://dashbord-51768-default-rtdb.firebaseio.com/users/${userId}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updateObj),
          }
        );
        const response = await req.json();
        setShowEditModal(false);
        getAllData();
        toast.success("You Update The User Information", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (err) {
        console.log(err);
        setShowEditModal(false);
        toast.error("Your update failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <>
      {/* users content */}
      <div className="users py-8">
        {/* user table box */}
        <div className="w-full bg-blueBlackrGadient p-6 rounded-2.5xl my-4">
          {/* table box header */}
          <h4 className="text-base sm:text-lg md:text-xl">All Users</h4>

          {/* table container */}
          <div className="w-full overflow-x-auto my-4">
            {/* main table */}
            <table className="table border-collapse w-full">
              {/* table header */}
              <thead>
                <tr className="border-b border-b-[#2d3748]">
                  <th className="text-secondary font-normal text-xs text-left p-4 pl-0 uppercase">
                    UserName/Email
                  </th>
                  <th className="text-secondary font-normal text-xs text-left p-4 pl-14 md:pl-6 uppercase">
                    Function
                  </th>
                  <th className="text-secondary font-normal text-xs text-left p-4 uppercase">
                    Status
                  </th>
                  <th className="text-secondary font-normal text-xs text-left py-4 px-5 md:p-4 uppercase">
                    Employed
                  </th>
                  <th className="text-secondary font-normal text-xs text-left p-4 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {allUsers.length > 0 ? (
                  allUsers.map((user) => (
                    <tr key={user[0]} className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-1">
                          <h5 className="text-sm md:text-base text-nowrap">
                            {user[1].name}
                          </h5>
                          <p className="text-secondary text-xs">
                            {user[1].email}
                          </p>
                        </div>
                      </td>
                      <td className="p-4 pl-14 pr-5 md:pl-6">
                        <h6 className="text-xs">{user[1].job}</h6>
                        <p className="text-secondary text-sm">Developer</p>
                      </td>
                      <td className="p-4">
                        {user[1].status ? (
                          <span className="py-1 px-3 rounded-2xl bg-green-500 font-bold text-xs">
                            Online
                          </span>
                        ) : (
                          <span className="py-1 px-3 rounded-2xl border border-white font-bold text-xs">
                            Offline
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5 md:p-4">
                        <span className="font-bold text-sm text-nowrap">
                          {user[1].emplyed}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <button
                            type="button"
                            onClick={() => {
                              setShowEditModal(true);
                              setUserInfo(user[1]);
                              setUserId(user[0]);
                            }}
                            className="py-1 px-3 rounded-2xl bg-gray-800 font-bold text-xs"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-2">
                          <div className="w-[75px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                          <div className="w-[110px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                      <td className="p-4 pl-14 pr-5 md:pl-6 space-y-1.5">
                        <div className="w-[95px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        <div className="w-[70px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-2">
                          <div className="w-[75px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                          <div className="w-[110px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        </div>
                      </td>

                      <td className="p-4 pl-14 pr-5 md:pl-6 space-y-1.5">
                        <div className="w-[95px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        <div className="w-[70px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-2">
                          <div className="w-[75px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                          <div className="w-[110px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        </div>
                      </td>

                      <td className="p-4 pl-14 pr-5 md:pl-6 space-y-1.5">
                        <div className="w-[95px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        <div className="w-[70px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-2">
                          <div className="w-[75px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                          <div className="w-[110px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        </div>
                      </td>

                      <td className="p-4 pl-14 pr-5 md:pl-6 space-y-1.5">
                        <div className="w-[95px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        <div className="w-[70px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2d3748]">
                      <td className="p-4 pl-0">
                        <div className="flex flex-col gap-2">
                          <div className="w-[75px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                          <div className="w-[110px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        </div>
                      </td>

                      <td className="p-4 pl-14 pr-5 md:pl-6 space-y-1.5">
                        <div className="w-[95px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                        <div className="w-[70px] h-3 bg-gray-600 rounded-md relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[60px] h-4 rounded-2xl bg-gray-600 relative overflow-hidden skeleton"></div>
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* project table box */}
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
            <table className="w-full border-collapse table">
              {/* table header */}
              <thead>
                <tr className="border-b border-[#2d3748]">
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
                <tr className="border-b border-[#2d3748]">
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
                    <span className="text-center block font-bold">$1,399</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg bg-[#2d2e5f] w-[128px] mx-auto">
                      <div className="child-progress w-1/4 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 2 */}
                <tr className="border-b border-[#2d3748]">
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
                    <span className="text-center block font-bold">$3,000</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg bg-[#2d2e5f] w-[128px] mx-auto">
                      <div className="child-progress w-1/2 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 3 */}
                <tr className="border-b border-[#2d3748]">
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
                    <span className="text-center block font-bold">Not Set</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg bg-[#2d2e5f] w-[128px] mx-auto">
                      <div className="child-progress w-10/12 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 4 */}
                <tr className="border-b border-[#2d3748]">
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
                    <span className="text-center block font-bold">$22,987</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg bg-[#2d2e5f] w-[128px] mx-auto">
                      <div className="child-progress w-3/4 h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>

                {/* table row 5 */}
                <tr className="border-b border-[#2d3748]">
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
                    <span className="text-center block font-bold">$9,000</span>
                  </td>
                  {/* table column 4 */}
                  <td className="p-4 lg:p-3">
                    <div className="progress h-1 rounded-lg bg-[#2d2e5f] w-[128px] mx-auto">
                      <div className="child-progress w-[10%] h-1 bg-primary rounded-lg"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* error toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* edit modal */}
      <EditModal
        updateUser={updateUserInfo}
        editModalState={{ showEditModal, setShowEditModal }}
      >
        <div className="edit-body flex flex-col gap-3 mt-5">
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-2 rounded-md placeholder:text-xs bg-transparent border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded-md placeholder:text-xs bg-transparent border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={newUserJob}
            onChange={(e) => setNewUserJob(e.target.value)}
            type="text"
            placeholder="Enter Your Job"
            className="w-full p-2 rounded-md placeholder:text-xs bg-transparent border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={newUserEmplyed}
            onChange={(e) => setNewUserEmplyed(e.target.value)}
            type="date"
            placeholder="Enter Your Emplyed"
            className="w-full p-2 rounded-md placeholder:text-xs bg-transparent border border-[#2d3748] text-xs md:text-sm"
          />

          {/* switch box */}
          <div className="flex items-center gap-x-3 my-3">
            <span className="font-bold text-sm md:text-base">Status :</span>
            <label className="switch inline-block relative w-[60px] h-[25px]">
              <input
                checked={newUserStatus}
                onChange={(e) => setNewUserStatus(e.target.checked)}
                type="checkbox"
                className="hidden"
              />
              <span className="absolute cursor-pointer border border-[#2d3748] inset-0 rounded-full"></span>
            </label>
          </div>
        </div>
      </EditModal>
    </>
  );
}

export default Users;
