import { useContext } from "react";
import HeroList from './heroList';
import Header from './headerClassComponent';
import { ThemeContext } from '../providers/teremeProvider';

const HomePage = () => {
  const themeCtx= useContext(ThemeContext)
  return (
    <div className={themeCtx.theme ? 'div-light-l' : 'div-header-d'}>
     <ThemeContext.Consumer>
        {({ theme, changeTheme, changeThemeLight}) => <Header theme={theme} changeTheme={changeTheme} changeThemeLight={changeThemeLight} />}
        
      </ThemeContext.Consumer>
      <HeroList />
     
    </div>
  );
};
export default HomePage;
