import React from "react";

const Button = (props) => {
  return (
    <div className='mx-auto'>
      <button className='btn btn-primary' type='submit'>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
