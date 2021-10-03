import React, { memo } from "react";
import { useRecoilState } from "recoil";
import { inputTodoState } from "./store/inputTodoState";
// import { inputTodoContext } from "./providers/InputTodoProvider";

export const InputTodo = memo((props) => {
  const { onChange, onClick } = props;
  // const [todoText] = useContext(inputTodoContext);
  const [todoText] = useRecoilState(inputTodoState);

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
            onChange={onChange}
          />
          <button
            type="button"
            className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900 "
            onClick={onClick}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
});
