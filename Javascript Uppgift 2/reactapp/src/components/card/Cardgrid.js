import React, {useState, useEffect} from 'react'
import Cards from './Cards'


const Cardgrid = () => {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        setProducts(await res.json())
    },[])

  
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                products.map(product => (
                    <div className="col">
                    <Cards item={product} />
                </div>
                    ))
            }
        </div>
    )
}

export default Cardgrid
