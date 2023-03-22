import React, { useState } from 'react';

export const ThemeContext = React.createContext({
  changeTheme: () => {},
  changeThemeLight: () => {},
  theme: false,
});
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(true);

  const changeThemeLight = () => {
    if (Boolean(theme) === false) {
      setTheme(!theme);
    }
  };
  const changeTheme = () => {
    if (Boolean(theme) === true) {
      console.log(`hello`);
      setTheme(!theme);
    }
  };

  const getContextValue = () => ({
    changeThemeLight,
    changeTheme,

    theme,
  });

  return (
    <ThemeContext.Provider value={getContextValue()}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;