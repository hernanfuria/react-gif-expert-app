import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category, handleRemoveCategory}) => {
    const {images, isloading} = useFetchGifs(category);

    const handleDeleteButtonPressed = () => {
        console.log(`Borrando ${category}`)
        handleRemoveCategory(category);
    }
   
    return (
        <>
            <div className="category-header">
                <h3>{category}</h3>
                <button className='button-remove-category' onClick={handleDeleteButtonPressed}>Borrar</button>
            </div>
            {isloading && (<h2>Cargando...</h2>)}
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem 
                        key={image.id} 
                        {...image} 
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {  // defines input type hints
    category: PropTypes.string.isRequired,
}

