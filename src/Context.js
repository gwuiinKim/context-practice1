import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({
  clicked: 0,
  onClick: () => {}
});
// {
//     name: "",
//     age: 0,
//     detailChange: () => {}
//   }

export const UserContextProvider = ({ children }) => {
  const [clicked, setClicked] = useState(0);

  const onClick = () => {
    setClicked(clicked + 1);
  };

  const clickObject = {
    clicked,
    onClick
  };

  return (
    <UserContext.Provider value={clickObject}>{children}</UserContext.Provider>
  );
};

export const useClick = () => {
  const { clicked, onClick } = useContext(UserContext);
  return { clicked, onClick };
};
