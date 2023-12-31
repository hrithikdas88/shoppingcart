import React from 'react'
import "./Home.scss"
import { CartState } from '../../context/Context'

import CatCard from '../../components/catcard/CatCard'
import Filters from '../../components/filters/Filters'

const Home = () => {

  const {state: {products},
  productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
} =CartState()
  console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;
   

    if (sort){
      sortedProducts = sortedProducts.sort((a,b)=>
      sort==="lowToHigh"? a.price - b.price :b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  


  return (
    <div className='home'>
    <Filters/>
      <div className="productContainer">
        {transformProducts().map((prod)=> {
          return <CatCard item={prod} key={prod.id}/>
        })}
      </div>
        
    </div>
  )
}

export default Home