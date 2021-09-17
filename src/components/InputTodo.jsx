import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="bg-gray-50 rounded-md p-1 m-2 h-30px">
      <input
        className="placeholder-indigo-700 placeholder-opacity-50"
        type="text"
        placeholder="Enter your todo"
        size="30"
        value={todoText}
        onChange={onChange}
      />
      <button
        className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
};
