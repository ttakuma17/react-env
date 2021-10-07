/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react/cjs/react.development";
import { useSetRecoilState } from "recoil";
import { inputTodoState } from "../components/store/inputTodoState";

export const useUpdateText = () => {
  // useSetRecoilStateを利用する場合は変数を囲う配列は不要
  const setTodoText = useSetRecoilState(inputTodoState);
  const onChangeTodoText = useCallback((event) => {
    setTodoText(event.target.value);
  }, []);
  return { onChangeTodoText };
};
