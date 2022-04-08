import propTypes from 'prop-types';


const Popup = ({ popupData, showPopup, characteristics }) => {
  return (
    <div className='popup'>
        <h2>{popupData.name} | {popupData.manufacturer}</h2>
        <p className="price">{popupData.price} &euro;</p>
        <img src={popupData.imageFileName} alt={popupData.name}/>
        <p className="description">{popupData.description}</p>
        <p className="characteristics">{characteristics}</p>
        <ul>
            <li><strong>Color:</strong> {popupData.color}</li>
            <li><strong>Screen:</strong> {popupData.screen}</li>
            <li><strong>Processor:</strong> {popupData.processor}</li>
            <li><strong>RAM:</strong> {popupData.ram}</li>
        </ul>
        <button className='btn' onClick={() => showPopup(false)}>Close</button>
    </div>
  )
}

Popup.defaultProps = {
    characteristics: "Characteristics",
    color: "Color",
    screen: "Screen",
    processor: "Processor",
    ram: "RAM"
}

Popup.propTypes = {
    characteristics: propTypes.string,
    color: propTypes.string,
    screen: propTypes.string,
    processor: propTypes.string,
    ram: propTypes.string
}

export default Popup