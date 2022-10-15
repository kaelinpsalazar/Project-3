import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";
import retaillinks from "../components/helpers/Retaillinks";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_GIFT, QUERY_GIFTS } from "../utils/queries";
import GifterInput from "../components/helpers/GifterInput";
import MessageList from "../components/helpers/MessageList";

import "./styles/wedding.css";

function Wedding() {
  // const { loading, error, data } = useQuery(QUERY_GIFT, {
  //   variables: { _id: "6349d26b9a0c4fc685a941f4" },
  // });
  const { giftId } = useParams();
  const { loading, error, data } = useQuery(QUERY_GIFTS, {
    variables: { giftId: giftId },
  });
  const gifts = data?.gifts || [];
  console.log(gifts);
  // console.log(error);

  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          {/* {WishListList.map((wedding, idx) => { */}
          {/* return ( */}
          <WishListItems
          // id={idx}
          // name={wedding.name}
          // image={wedding.image}
          />
          {/* );
          })} */}
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px solid #1a1a1a" }}
        >
          <GifterInput />
        </div>
        <div className="col-12 col-md-10 mb-3">
          <MessageList title="Messages for the Newlyweds" />
        </div>
      </div>
      <div className="givemoney">
        <h1>...or you can just give money</h1>
      </div>
    </div>
  );
}

export default Wedding;
