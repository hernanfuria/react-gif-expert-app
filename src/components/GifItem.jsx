import PropTypes from 'prop-types';

export const GifItem = ({id, title, url}) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {  // defines input type hints
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
