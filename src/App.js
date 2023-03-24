import React from 'react';
import './App.css';
import MultiSelect from './Pages/MultiSelect';
import options from '../src/JSONDATA/options.json';
 // console.log(options);
function App() {
  let selectData = options.map((val) =>val.label);
  // console.log(selectData);
  return (
    <div>
      <MultiSelect selectData={selectData} value={selectData.slice(0,3)} readonly={false}/>
    </div>
  )
}

export default App
