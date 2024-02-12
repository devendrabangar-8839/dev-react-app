import React from 'react'

const MyButton = ({ onClick, label }) => {
    return (
      <button type='button' className='btn btn-primary' onClick={onClick}>
        {label}
      </button>
    );
  }

export default MyButton