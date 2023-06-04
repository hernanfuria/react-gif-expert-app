import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const handleAddCategory = (cat) => {
        setCategories([cat, ...categories]);
    }

    const handleRemoveCategory = (cat) => {
        const newCategories = []
        for (const c of categories) {
            (c != cat) && newCategories.push(c);
        }

        setCategories(newCategories);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                handleAddCategory={handleAddCategory} 
            />

            {/*<button aria-label='agregar' onClick={handleAddCategory}>Agregar</button>*/}
            {
                categories.map(category => {
                    return (<GifGrid 
                                key={category} 
                                category={category} 
                                handleRemoveCategory={handleRemoveCategory}
                            />)  
                })
            }
        </>
    )
}
