import propTypes from 'prop-types';

const Snackbar = ({ message, showSnackbar }) => {
    return (
        <div className={"snackbar " + (showSnackbar ? 'show' : '')}>{message}</div>
    )
  }

  Snackbar.defaultProps = {
    message: "The product has been removed",
}

Snackbar.propTypes = {
    message: propTypes.string,
}

export default Snackbar

