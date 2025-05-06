import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    //aquí se inserta lo del input a la lista
    const onSubmit = ( event ) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return //si esto se cumple el return es para que deje de ejecutarse la funcion
        
        // setCategories( categories => [ inputValue, ...categories])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}> {/*si existe una funcion callback y el argumento es lo unico que se llama en la funcion se puede disminuir dejandolo solo asi { algo } */}
            <input 
                type='text' 
                placeholder="Buscar gifs"   
                value={ inputValue } 
                onChange={ (event) => onInputChange(event) }
                //onChange={ onInputChange } puede quedar asi ya que se 
                // utiliza el primer argumento que se le esta mandando a la
                //  funcion que se quiere ejecutar
            />
        </form>
    )
}