//import About from './About';
import { useState } from 'react';
import './App.css';
import TextForm from './TextForm';
import Navbar from './components/Navbar';
import Alert from './Alert';


function App() 
{
  const [mode,setMode] = useState('light');//whether dark mde is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert =(messege,type)=>{
        setAlert({
          msg:messege,
          type:type
        })
        setTimeout(() =>{
            setAlert(null);
        },3000)
  }

  const toggleMode =()=>{
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
   
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />

<div className="container">

     <TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode} />
{/*<About />*/}
</div>

    </>
  );
}

export default App;
