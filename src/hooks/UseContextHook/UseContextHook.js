import React, { createContext, useState } from "react";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

//imagine you many state and function as props & passing all those to many components, its not maintainable
//allows to access state through out the tree of component
//creating and exporting context
export const UserDataContext = createContext(null);
const UseContextHook = () => {
  const [userName, setUserName] = useState("default name");
  return (
    <UserDataContext.Provider value={{userName, setUserName}}>
      {/* wrapping under provider and passing props/functions */}
      <LoginComponent />
      <WelcomeComponent />
    </UserDataContext.Provider>
  );
};

export default UseContextHook;
