import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer({ numberOfIceCreams, buyIceCream }) {
  return (
    <div>
      <hr />
      <h2>Number of Ice Cream -{numberOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
