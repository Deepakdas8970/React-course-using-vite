// GrandParent component which holds the data and passes it to the Parent component
const GrandParent = () => {
  // Data to be passed down the component tree
  const data = "Hello from GrandParent";

  // Passing the data prop to the Parent component
  return <Parent data={data} />;
};

// Parent component which receives the data prop and passes it to the Child component
const Parent = ({ data }) => {
  // Passing the data prop to the Child component
  return <Child data={data} />;
};

// Child component which receives the data prop and passes it to the GrandChild component
const Child = ({ data }) => {
  // Passing the data prop to the GrandChild component
  return <GrandChild data={data} />;
};

// GrandChild component which receives and uses the data prop
const GrandChild = ({ data }) => {
  // Displaying the data prop
  return <div>{data}</div>;
};
