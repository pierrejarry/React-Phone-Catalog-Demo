import { useState, useEffect } from 'react';
import './css/style.css';
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Popup from "./components/Popup";

function App() {
  const [phones, setPhones] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState([]);

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

  // Show All Information about a phone (Popup)
  const showProductDetails = async (id) => {    
    const product = await fetch(`http://localhost:5000/phones/${id}`, {
      method: 'GET'
    })
    const data = await product.json()
    setPopupData(data);
    showPopup === false ? setShowPopup(true) : setShowPopup(false);
  }

  // Close Popup
  const hideProductDetails = async () => {    
    setPopupData([]);
    setShowPopup(false);
  }
  
  return (
    <div className="container">
      <Header/>
      <Catalog 
        phones={phones} 
        showProduct={showProductDetails}
      />
      
      { showPopup && <div className='overlay' onClick={() => hideProductDetails()} /> }
      { showPopup && <Popup popupData={popupData} showPopup={hideProductDetails} /> }
    </div>
  );
}

export default App;
