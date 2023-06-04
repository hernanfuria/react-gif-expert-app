import { useState } from "react"

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
        <form onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar GIFs" 
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
            />
        </form>
  )
}
