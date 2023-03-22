import React from 'react';
import './App.css';
import HomePage from './components/homePage';
import ThemeProvider from './providers/teremeProvider';
import DayNightProvider from './providers/dayNightProvider';
import HttpHerousProvider from './providers/httpHeroProvider';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <DayNightProvider>
          <HttpHerousProvider>
            <HomePage />
          </HttpHerousProvider>
        </DayNightProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
