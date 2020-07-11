import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const  GifExpertApp=  ()  =>{
    
    //const categories = ['One Punch','Samurai X','Rick y Morty'];
    const [categories,setCategories] = useState(['One Punch']);
    
   /* 
    const handleAdd = (e) =>{
        const valorNuevo = e;
        //setCategories([...categories,e]);
        setCategories( cat => [...categories,e])
        console.table(categories);
    }
    */
    
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory  setCategories = {setCategories} />
            <hr />
            <ol>
                {
                    categories.map( c =>{
                        return <GifGrid 
                            key={c}
                            category={c}
                        />
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
