import logo from './logo.svg';
import './App.css';
import Daytwofirst from './day2/daytwofirst';
import Daytwosecond from './day2/Daytwosecond';
import Day2pah from './day2/Day2pah';
import Day3CE from './day3/Day3CE';
import Transformation from './day3/Day3pah';
import ErrorBoundary2 from './day5/ErrorBoundary2';
import HoverCouunter from './day6/HoverCouunter';
import TryCatch from './day5/TryCatch';
import Propvalidation from './day6/Propvalidation';
import SpreadpassUnkonown from './day6/SpreadpassUnkonown';






function App() {
  return (
    <div className="App">
      <Daytwofirst/>
      <Daytwosecond/>
      <Day2pah/>
      <Day3CE/>
      <Transformation/>
      <ErrorBoundary2/>
      <HoverCouunter/>
      <TryCatch name='Aja'/>
      <Propvalidation name={12}/>
      <SpreadpassUnkonown title1='SKCET' type='password' placeholder='Enter Password' id='i'/>
    </div>
  );
}

export default App;
