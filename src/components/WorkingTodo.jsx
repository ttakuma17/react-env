import React from "react";

export const WorkingTodo = (props) => {
  const { workingTodos, onClickPending, onClickDone } = props;
  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Working Todo
      </p>
      <ul>
        {workingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickPending(index, "workinglist");
                  }}
                >
                  Pending
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickDone(index);
                  }}
                >
                  Done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
