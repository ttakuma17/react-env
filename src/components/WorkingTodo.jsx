import React, { memo, useEffect } from "react";
import { useRecoilState } from "recoil";
import { workingTodoState } from "./store/workingTodoState";
import { useGetTodos } from "../hooks/useGetTodos";
import { useMoveItemFunc } from "../hooks/useMoveItemFunc";

export const WorkingTodo = memo(() => {
  const { getJsonData } = useGetTodos();
  const [workingTodo, setWorkingTodo] = useRecoilState(workingTodoState);
  const { workingToPending, workingToComplete } = useMoveItemFunc();

  // workingTodoの初期値を設定
  useEffect(() => {
    getJsonData(1).then((data) => {
      const initWorkingTodo = [...workingTodo, data, data];
      setWorkingTodo(initWorkingTodo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Working Todo List
      </p>
      <ul>
        {workingTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    workingToPending(index);
                  }}
                >
                  Pending
                </button>
                <button
                  className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
                  onClick={() => {
                    workingToComplete(index);
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
});
