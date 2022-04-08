import { useState, useEffect } from 'react';
import './css/style.css';
import Header from "./components/Header";
import Catalog from "./components/Catalog";

function App() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    const getPhoneCatalog = async () => {
      const getDataFromServer = await fetchPhones()
      setPhones(getDataFromServer)
    }

    getPhoneCatalog()
  }, [])

  // Fetch Phone Catalog Data
  const fetchPhones = async () => {
    const res = await fetch('http://localhost:5000/phones')
    const data = await res.json()
    
    return data
  }

  return (
    <div className="container">
      <Header/>
      <Catalog 
        phones={phones} 
      />
    </div>
  );
}

export default App;
