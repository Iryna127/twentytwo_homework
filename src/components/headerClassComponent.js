import '../css/header.css';
import React from 'react';
import { DayNightContext } from '../providers/dayNightProvider';
class Header extends React.Component {
  static contextType = DayNightContext;
  constructor(props) {
    super(props);
  }

  handlerThemeChange = () => {
    this.props.changeThemeLight();
  };
  handlerThemeChangeLight = () => {
    this.props.changeTheme();
  };
  render() {
    return (
      <div>
        <div className='indicator'>
            {this.props.theme && (
          <div className="day">{this.context.valueLight}</div>
        )}
        {!this.props.theme && (
          <div className="night">{this.context.valueNight}</div>
        )} 
        </div>
       

        <button onClick={this.handlerThemeChange}>Day</button>
        <button onClick={this.handlerThemeChangeLight}>Night</button>
      </div>
    );
  }
}

export default Header;
