import React from "react";
import { connect } from "react-redux";

function ItemContainer({ items, product }) {
  return (
    <div>
      <hr />
      <h2>
        Items available for {product}: {items}
      </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  let product;
  ownProps.cake ? (product = "Cake") : (product = "Ice Cream");

  return {
    items: itemState,
    product: product,
  };
};

export default connect(mapStateToProps)(ItemContainer);
