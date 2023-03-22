import React from 'react';

export const DayNightContext = React.createContext({
  valueLight:'DAY',
  valueNight : 'Night',
 
});
const DayNightProvider = (props) => {
 const obgValues = {
    valueLight : 'DAY', valueNight : 'Night',
    
 }
  return (
    <DayNightContext.Provider value={obgValues}>
       {props.children}
    </DayNightContext.Provider>
  );
};

export default DayNightProvider;