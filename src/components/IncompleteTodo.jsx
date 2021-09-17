import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickWorking, onClickPending, onClickDelete } =
    props;
  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-800 border-solid border4 border-blue-800 rounded-md w-1/4">
        Todo List
      </p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickWorking(index, "incompletelist");
                  }}
                >
                  Working
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickPending(index, "incompletelist");
                  }}
                >
                  Pending
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickDelete(index, "incompletelist");
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
