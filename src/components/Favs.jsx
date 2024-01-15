import React from 'react'
import { useState } from 'react'
import * as favsAPI from '../utilities/favs-api.js';
import { useEffect } from 'react';
import FavProducts from './FavoriteProducts.jsx';

function Favs({ user, setUser }) {
  const [favs, setFavs] = useState([]);

  useEffect(function() {
    async function getFavItems() {
      const items = await favsAPI.getAll();
      setFavs(items);
    }
    getFavItems();
  }, []);


  return (
    <><div>
      <h1>hello my fav</h1>
    </div><div>
        <FavProducts favs={favs}/>
      </div></>
    
  )
}

export default Favs