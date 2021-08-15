import React, { useState } from "react";
import useLocalStorage from "./LocalStorage";

const darkModeOn = "false";

const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage(darkModeOn);
    return [ darkMode, setDarkMode ];
};

export default useDarkMode;