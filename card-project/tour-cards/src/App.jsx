import React from 'react'
import data from "./components/data";
import { CardContent } from './components/CardContent';
import "./App.css"

// console.log(data);

const App = () => {
  return (
    <div>
      <h1 className='h1Tag'>Our Tours</h1>
      <div className='main_div'>
        <CardContent data={data}/>
      </div>
    </div>
  )
}

export default App
