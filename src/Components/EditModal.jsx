import { memo } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function EditModal({ editModalState, updateUser, children }) {
  return createPortal(
    <div
      className={`edit-modal ${
        editModalState.showEditModal ? "show" : ""
      } fixed inset-0 z-[60] grid place-content-center transition-all ease-ease duration-300`}
    >
      <div
        onClick={() => editModalState.setShowEditModal(false)}
        className="edit-modal-overlay fixed inset-0 bg-[#00000080]"
      ></div>
      <div className="edit-modal-content ease-ease duration-300 transition-all relative py-4 px-5 w-[280px] sm:w-[420px] rounded-lg">
        <div className="edit-modal-header flex items-center justify-between">
          <h4 className="text-sm md:text-base">Edit Your Information</h4>
          <IoMdClose
            onClick={() => editModalState.setShowEditModal(false)}
            className=" font-bold text-lg md:text-2xl cursor-pointer"
          />
        </div>
        {children}
        <div className="w-full text-right ">
          <button
            onClick={updateUser}
            type="button"
            className="px-5 py-1 bg-primary rounded-lg text-sm font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default memo(EditModal);
