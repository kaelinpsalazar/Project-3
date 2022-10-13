import React from 'react';
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";

import './styles/Wedding.css';

function Wedding() {
  return (
    <div className="wedding">
      <h1>Our Wish List Items</h1>
      <div className="wishListList">
        {WishListList.map((wedding, idx) => {
          return (
            <WishListItems id={idx} name={wedding.name} image={wedding.image} />
          )
        })}
      </div>
    </div>
  );
}

export default Wedding;
