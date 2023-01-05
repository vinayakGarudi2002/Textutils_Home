
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';

function App() {
const [mode,setMode]=useState("light")
const [alert,setAlert]=useState(false)
const [bgColor,setBgColor]=useState("grey")


const showAlert=(type,message)=>{
 
    setAlert({
      type:type,
      msg:message
    })
  setTimeout(()=>{
    setAlert(false)
  },1200)
}

const darkmode = (color)=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor=color
    setBgColor(color)

    showAlert("success","Dark mode Enabled")
    // document.title="Textutils-dark"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("success","Dark mode Disabled")
  }
}

  return (
    <div className="App">

 {/* <Router> */}
 <Navbar title="TextUtils" mode={mode} darkmode={darkmode}  />
 <Alert alert={alert}/>
  {/* <Routes> */}
    <div className='container'><TextArea textTitle="Enter Text" bgColor={bgColor}  mode={mode} showAlert={showAlert} /></div>
  {/* </Routes> */}
 {/* </Router> */}
    </div>
  );
}

export default App;