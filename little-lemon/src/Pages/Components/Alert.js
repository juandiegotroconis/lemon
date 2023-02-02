import React from "react";
import { useAlert } from "../../context/alertContext";
import "./Alert.css";

function Alert() {
  const { state, onClose } = useAlert();
  const success = state.type === "success";

  return (
    <div
      className='GlobalAlert'
      style={{ display: state.isOpen ? "" : "none" }}
    >
      <div className='alert-wrapper'>
        {state.message === "loading" ? (
          <span className='loader'></span>
        ) : (
          <>
            <h2>{success ? "All good!" : "Oops!"}</h2>
            <p>
              {success
                ? state.message
                : "An error has occurred, please try again later."}
            </p>
            <p
              className='alert-close'
              onClick={() => {
                onClose();
              }}
            >
              X
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Alert;
