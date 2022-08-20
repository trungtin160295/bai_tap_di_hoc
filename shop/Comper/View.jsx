import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Button from './Button'
import Result from './ViewResult'


function View({paraGetData}) {
  const [count, setCount] = useState(0);

  const handleClickCallback =() => {
    setCount(count + 1)
    paraGetData(count + 1)
  }

  return (
    <div>
        <Button OnClick={handleClickCallback}/>
        <Result count={count}/>
    </div>
   
  )
}

export default View
