import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import FormText from "./components/FormText";
import About from "./components/About";
import {useState} from "react";
function App() {
    const[darkMode, setdarkMode] =useState(
    {
        color: 'white',
        backgroundColor: 'black'
        // data-bs-theme="dark"
    })
  return (
      <div style={darkMode} data-bs-theme="dark">
          <NavigationBar app_name="My React App"/>
          <FormText heading="Please enter the text to analyze"/>
          <About/>
      </div>
  );
}

export default App;
