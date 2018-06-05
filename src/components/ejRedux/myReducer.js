import React from 'react';

export const MyReducer = (state = 0, action) => {
    switch(action.type) {
      case 'sumar':
        return state + 1;
      case 'restar':
        return state - 1;
      default:
        return state;
    }
  };

  export default MyReducer;