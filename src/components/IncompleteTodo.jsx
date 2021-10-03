import React, { memo, useEffect } from "react";
import { useRecoilState } from "recoil";
import { incompleteTodoState } from "./store/incompleteTodoState";
import { useGetTodos } from "../hooks/useGetTodos";

export const IncompleteTodo = memo((props) => {
  const { onClickWorking, onClickPending, onClickDelete } = props;
  const { getJsonData } = useGetTodos();
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);

  // incompleteTodoの初期値を設定
  useEffect(() => {
    getJsonData(0).then((data) => {
      const initIncompleteTodo = [...incompleteTodo, data, data];
      setIncompleteTodo(initIncompleteTodo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Todo List
      </p>
      <ul>
        {incompleteTodo.map((todo, index) => {
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
});
