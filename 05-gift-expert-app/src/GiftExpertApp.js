import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpert = () =>{

    const [categories, setCategories] = useState(['One Piece']);

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category= {category} />
                    })
                }
            </ol>
        </>
    )
};

export default GiftExpert;

//React functional Componene start with capital letter
//rfc snipet to create automaticali functional componenets