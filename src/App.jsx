
import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import Head from './components/Head/Head'
import Popup from './components/Popup/Popup'
import Project from './components/Project/Project'
import Work from './components/Work/Work'

function App() {

  const [showPopup,setShowPopup] = useState(true)

 useEffect(()=>{
  setTimeout(()=>{
    setShowPopup(true)
  },3000)
 },[])

  return (
    <div className="App">
      <Popup trigger={showPopup} handleClick={setShowPopup}/>
     <Head/>
     <Work/>
     <Project/>
     <Footer/>
    </div>
  )
}

export default App
