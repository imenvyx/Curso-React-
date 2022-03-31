import React, { useEffect, useState } from 'react'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

const GiftExpertApp = () => {

    /*  const categories=["One Punch","Dragon Ball","Samurai X"]; */

    const [categories, setCategories] = useState(["One Punch"])

   


    return (
        <div>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {
                categories.map(category =>
                    <GiftGrid 
                    key={category}
                    category={category}/>
                )
            }
        </div>
    )
}

export default GiftExpertApp
