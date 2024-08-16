import React, { createContext, useContext } from 'react';

// Creating a context to hold the data
const DataContext = createContext();

// GrandParent component which provides the data using the Context API
const GrandParent = () => {
  // Data to be passed down the component tree
  const data = "Hello from GrandParent";

  // Providing the data to the context so that any component in the tree can access it
  return (
    <DataContext.Provider value={data}>
      <Parent />
    </DataContext.Provider>
  );
};

// Parent component which no longer needs to pass the data prop
const Parent = () => {
  // No need to pass the data prop
  return <Child />;
};

// Child component which no longer needs to pass the data prop
const Child = () => {
  // No need to pass the data prop
  return <GrandChild />;
};

// GrandChild component which consumes the data from the context
const GrandChild = () => {
  // Using the useContext hook to access the data from the context
  const data = useContext(DataContext);

  // Displaying the data from the context
  return <div>{data}</div>;
};
