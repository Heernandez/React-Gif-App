import React,{useState} from 'react'

import PropTypes from 'prop-types';
//rafc

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("Busqueda")
    

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            console.log("Submit hecho");
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }

    }
    return (
        <div>
            <h2> Add Category</h2>
            <h3>{inputValue}</h3>
            <form onSubmit = { handleOnSubmit}>
                <input
                    type="text"
                    value = {inputValue}
                    onChange = { e => handleInputChange(e)}
                />
            </form>
        </div>
    )

}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}