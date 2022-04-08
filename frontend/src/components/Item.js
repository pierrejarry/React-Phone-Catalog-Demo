import propTypes from 'prop-types';

const Item = ({ phone }) => {
    return (
        <li>
            <img src={phone.imageFileName} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p className='price'>{phone.price} &euro;</p>
            <p className='description'>{phone.description}</p>
        </li>
    )
}
  
Item.defaultProps = {
    removeProduct: "Remove Product",
    moreInfo: "More Information"
}

Item.propTypes = {
    removeProduct: propTypes.string,
    moreInfo: propTypes.string
}

export default Item