import { useContext } from "react";
import { ThemeContext } from "../providers/teremeProvider";
const HeroCard = (props) => {
    const themeCtx= useContext(ThemeContext)
  return (
    <div className="card">
        <div className={themeCtx.theme ? 'div-light' : 'div-header'}>{props.children}</div>
     
    </div>
  );
};
export default HeroCard;
