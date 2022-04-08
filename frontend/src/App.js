import { useState, useEffect } from 'react';
import './css/style.css';
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Popup from "./components/Popup";
import AddPhone from "./components/AddPhone";
import Snackbar from "./components/Snackbar";

function App() {
  const [phones, setPhones] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

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
  
  // Add Phone Item
  const addPhone = async (item) => {
    const res = await fetch('http://localhost:5000/phones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    })

    const data = await res.json()

    setPhones([...phones, data])

    setShowForm(false);
  }

  // Delete Phone Item
  const deletePhone = async (id) => {
    await fetch(`http://localhost:5000/phones/${id}`, {
      method: 'DELETE'
    })

    setPhones(phones.filter((phone) => phone.id !== id))
    setShowSnackbar(true);
    setTimeout(function(){ setShowSnackbar(false); }, 3000);
  }

  return (
    <div className="container">
      <Header/>
      <button className='btn secondary' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add a New Product'}</button>
      { showForm ? <AddPhone onAdd={addPhone} /> : null }
      <Catalog 
        phones={phones} 
        showProduct={showProductDetails}
        removePhone={deletePhone}
      />
      
      { showPopup && <div className='overlay' onClick={() => hideProductDetails()} /> }
      { showPopup && <Popup popupData={popupData} showPopup={hideProductDetails} /> }

      <Snackbar showSnackbar={showSnackbar}/>
    </div>
  );
}

export default App;
