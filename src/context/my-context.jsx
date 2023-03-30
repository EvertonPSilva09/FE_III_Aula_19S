import { createContext } from "react";

const MyContext = createContext({});

const MyProvider = () => {
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export default MyProvider;
