import propTypes from 'prop-types';

const Header = ({ title, description }) => {
  return (
    <header>
        <h1>{ title }</h1>
        <p>{ description }</p>
    </header>
  )
}

Header.defaultProps = {
    title: "Phone Catalog",
    description: "You can find all the phones we have in stock"
}

Header.propTypes = {
    title: propTypes.string,
    description: propTypes.string
}

export default Header