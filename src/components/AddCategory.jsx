import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({handleAddCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue != '') {
            handleAddCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar GIFs" 
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
            />
        </form>
  )
}

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired,
}