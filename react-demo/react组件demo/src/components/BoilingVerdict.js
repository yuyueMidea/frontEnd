import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.{props.celsius}</p>;
    }
    return <p>The water would not boil.{props.celsius}</p>;
  }
  export default BoilingVerdict;