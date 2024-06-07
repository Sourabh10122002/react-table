import './App.css';
import FormData from './Pages/Form/Form';
import Home from './Pages/Home/Home';
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

export const userContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [uiData, setUIData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setUIData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="App">
      <userContext.Provider value={{ data, uiData, setData, setUIData }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userid' element={<FormData data={data} setData={setData} />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;