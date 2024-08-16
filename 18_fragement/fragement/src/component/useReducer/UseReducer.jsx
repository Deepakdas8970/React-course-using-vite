import React, { useReducer } from "react";

// Define the functional component UseReducer
const UseReducer = () => {
  // Set the initial state to 0
  const initialState = 0;
  
  // Define the reducer function that takes the current state and an action as arguments
  const reducer = (state, action) => {
    console.log(state, action); // Log the current state and action for debugging purposes
    
    // Check the action type and update the state accordingly
    if (action.type === "Increment") {
      return state + 1; // Increment the state by 1
    }
    if (action.type === "Decrement") {
      return state - 1; // Decrement the state by 1
    }
    
    // Return the current state if the action type is not recognized
    return state;
  };

  // Initialize the useReducer hook with the reducer function and the initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-center">UseReducer Hook</h1>
      <div className="border m-5 p-3 bg-success text-white">
        <h1 className="text-center">{state}</h1>
        <div className="d-flex justify-content-center">
          {/* Button to dispatch an Increment action */}
          <button 
            className="btn btn-warning me-2" 
            onClick={() => dispatch({ type: "Increment" })}
          >
            Increment
          </button> 
          <br />
          {/* Button to dispatch a Decrement action */}
          <button 
            className="btn btn-info"  
            onClick={() => dispatch({ type: "Decrement" })}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer; // Export the UseReducer component as the default export
