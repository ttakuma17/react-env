import React, { memo } from "react";
import { useRecoilValue } from "recoil";

import { inputTodoState } from "./store/inputTodoState";
import { useMoveItemFunc } from "../hooks/useMoveItemFunc";
import { useUpdateText } from "../hooks/useUpdateText";
import { PushButton } from "./PushButton";

export const InputTodo = memo(() => {
  const todoText = useRecoilValue(inputTodoState);
  const { addToNewIncompleteTodo } = useMoveItemFunc();
  const { onChangeTodoText } = useUpdateText();

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2 h-30px">
      <form className="w-2/4 pt-3 pl-1">
        <div className="mb-4 flex">
          <input
            className="placeholder-indigo-700 placeholder-opacity-50 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight border-none focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter your todo"
            size="30"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <PushButton
            onClickAction={() => {
              addToNewIncompleteTodo();
            }}
          >
            Add
          </PushButton>
        </div>
      </form>
    </div>
  );
});
