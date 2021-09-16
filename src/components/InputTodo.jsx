import React from "react";

export const InputTodo = (props) => {
  const inputArea = {
    width: "400px",
    height: "8px",
    padding: "12px",
    paddingBottom: "5px",
    margin: "8px",
  };

  const { todoText, onChange, onClick, button } = props;
  return (
    <div style={inputArea}>
      <input
        type="text"
        placeholder="Enter your todo"
        size="30"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick} style={button}>
        Add
      </button>
    </div>
  );
};
