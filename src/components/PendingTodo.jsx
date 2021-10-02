import React, { memo, useContext, useEffect } from "react";
import { pendingTodoContext } from "./providers/PendingTodoProvider";
import { useGetTodos } from "../hooks/useGetTodos";

export const PendingTodo = memo((props) => {
  const { onClickWorking, onClickBackTodo } = props;
  const { getJsonData } = useGetTodos();
  const [pendingTodo, setPendingTodo] = useContext(pendingTodoContext);

  useEffect(() => {
    getJsonData(2).then((data) => {
      const initPendingTodo = [...pendingTodo, data, data];
      setPendingTodo(initPendingTodo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Pending Todo List
      </p>
      <ul>
        {pendingTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickBackTodo(index, "pendinglist");
                  }}
                >
                  Back Todo
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    onClickWorking(index, "pendinglist");
                  }}
                >
                  Working
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
