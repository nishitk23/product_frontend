import React, { useState } from "react";

const EdgeForm = ({ edge, onUpdate, onDelete }) => {
  console.log("Edge: " + JSON.stringify(edge.label))
    const [label, setLabel] = useState(edge.label);
    const [weight, setWeight] = useState(edge.weight);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdate({ label, weight });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="label">Label:</label>
        <input
          id="label"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
  
        <button type="submit">Update</button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </form>
    );
  };
  export default EdgeForm;