// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import View from '../Comper/View'


function App() {
  // const [count, setCount] = useState({
  //   name:"Tin",
  //   age:10
  // }   );
  const handleCallbackGetValue = data =>{
    console.log("show data",data);
  }

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <View paraGetData={handleCallbackGetValue}/>
    </div>
   
  )
}

export default App
