import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Kamisama' ])
    const onAddCategory = (newCategory) => {
        
        if ( categories.includes(newCategory) ) return ;
        
        //el operador spread hace una copia de todo lo que existe en el arreglo y agrega otra
        setCategories([ newCategory, ...categories])
        
        // setCategories(cat => [...cat, 'LADS'])
    }
    
    return (
        <>  
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory = { (value) => onAddCategory(value)}
            />
            { 
                categories.map( (category) => (
                    <GifGrid key={ category } 
                    category={ category } 
                    />
                ))
            }
        </>
    )
}
