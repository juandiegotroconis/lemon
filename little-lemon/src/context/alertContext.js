import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success",
    message: "Please",
  });
  const [close, setClose] = useState();

  const handleOpen = (type, message, closeAction) => {
    setState({ isOpen: true, type, message });
    if (closeAction) {
      setClose(closeAction);
    }
  };

  const handleClose = () => {
    setState({ isOpen: false, type: "", message: "" });
    if (close) {
      window.location.href = close;
    }
  };

  return (
    <AlertContext.Provider
      value={{
        state,
        onOpen: handleOpen,
        onClose: handleClose,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
