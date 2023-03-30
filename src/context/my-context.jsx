import { createContext } from "react";

export const MyContext = createContext({});

const MyProvider = ({ children }) => {
  const nome = "Wesley";
  return (
    <MyContext.Provider
      value={{
        nome: nome,
        disciplina: "Front",
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
