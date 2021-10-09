import React, { memo, useEffect } from "react";
import { useRecoilState } from "recoil";

import { pendingTodoState } from "./store/pendingTodoState";
import { useGetTodos } from "../hooks/useGetTodos";
import { useMoveItemFunc } from "../hooks/useMoveItemFunc";
import { PushButton } from "./PushButton";

export const PendingTodo = memo(() => {
  const { getJsonData } = useGetTodos();
  const [pendingTodo, setPendingTodo] = useRecoilState(pendingTodoState);
  const { pendingToIncomplete, pendingToWorking } = useMoveItemFunc();

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
                <PushButton
                  onClickAction={() => {
                    pendingToIncomplete(index);
                  }}
                >
                  Back Todo
                </PushButton>
                <PushButton
                  onClickAction={() => {
                    pendingToWorking(index);
                  }}
                >
                  Working
                </PushButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
