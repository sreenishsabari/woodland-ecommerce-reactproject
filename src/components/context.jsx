import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const [formFields, setFormFields] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setUser = (email, name) => {
    setUserEmail(email);
    setUserName(name);
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        userName,
        setUser,
        formFields,
        setFormFields,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
