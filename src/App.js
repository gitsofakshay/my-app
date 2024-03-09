// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,  
  Route,
  Routes,
 } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [btnMode, setBtnMode] = useState('primary');
  const [textMode, setTextMode] = useState('black');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleDarkMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      setTextMode('white');
      document.body.style.backgroundColor = '#030336';
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - is Amazing';
      // }, 2000);
    
      // setInterval(() => {
      //   document.title = 'TextUtils - is Awesome';
      // }, 1500);
      showAlert('Dark mode has been enabled', 'success');
    }else if (darkMode === 'dark'){
      setDarkMode('light');
      setTextMode('black');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Home';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const toggleBlueMode = () => {
    if (darkMode === 'light') {
      setDarkMode('blue');
      setBtnMode('success');
      setTextMode('white');
      document.body.style.backgroundColor = 'blue';
      document.title = 'TextUtils - Blue Mode';
      showAlert('Blue mode has been enabled', 'success');
    }else if (darkMode === 'blue') {
      setDarkMode('light');
      setBtnMode('primary');
      setTextMode('black');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Home';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const toggleGreyMode = () => {
    if (darkMode === 'light') {
      setDarkMode('grey');
      setBtnMode('primary');
      setTextMode('white');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Grey Mode';
      showAlert('Grey mode has been enabled', 'success');
    }else if (darkMode === 'grey'){
      setDarkMode('light');
      setBtnMode('primary');
      setTextMode('black');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Home';
      showAlert('Light mode has been enabled', 'success');
    }
  } 

  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleDarkMode={toggleDarkMode} toggleBlueMode={toggleBlueMode} toggleGreyMode={toggleGreyMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About title="About Us"/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" textMode={textMode} btnMode={btnMode} />}>
            {/* <TextForm showAlert={showAlert} heading="Enter your text to analyze" textMode={textMode} btnMode={btnMode} /> */}
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
