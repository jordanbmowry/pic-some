import React, { createContext } from 'react';

const Context = createContext();

function ContextProvider(props) {
  return (
    <Context.Provider value={'placeholder'}>{props.children}</Context.Provider>
  );
}

export { Context, ContextProvider };
