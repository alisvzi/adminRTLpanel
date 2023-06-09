import { createContext, useContext, useState } from "react";
const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsCliked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#01cdfe");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) => {
    setIsCliked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsCliked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
