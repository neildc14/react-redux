import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    if (props.numberOfCakes === 0) {
      return;
    }
    props.buyCake(number);
  };
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <input
        type="text"
        name=""
        id=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: (number) => dispatch(buyCake(number)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
