import React, { useState, useEffect } from 'react';
import { async } from 'q';


function Shop() {
  useEffect (() =>{
    fetchItems(); 
  }, []); 
  
  const fetchItems = async () => {
    const data = await fetch (
      'https://www.apple.com/'
    ); 

    const items = await data.json; 
    console.log(items.items); 
    setItems(items); 
  }; 

  return(
    <div>
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={#}></Link>
        </h1>
      ))}
    </div>
  )
}

export default Shop;
