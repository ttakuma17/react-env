import React, { memo, useEffect } from "react";
import { useRecoilState } from "recoil";
import { completeTodoState } from "./store/completeTodoState";
import { useGetTodos } from "../hooks/useGetTodos";
import { useMoveItemFunc } from "../hooks/useMoveItemFunc";

export const CompleteTodo = memo(() => {
  const { getJsonData } = useGetTodos();
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  const { completeToIncomplete, completeItemDelete } = useMoveItemFunc();

  useEffect(() => {
    getJsonData(3).then((data) => {
      const initCompleteTodo = [...completeTodo, data, data];
      setCompleteTodo(initCompleteTodo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Complete Todo List
      </p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    completeToIncomplete(index);
                  }}
                >
                  Back Todo
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    completeItemDelete(index);
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
});
