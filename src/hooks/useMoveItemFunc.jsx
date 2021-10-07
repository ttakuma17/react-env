/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState } from "recoil";
import { useCallback } from "react/cjs/react.development";

import { inputTodoState } from "../components/store/inputTodoState";
import { incompleteTodoState } from "../components/store/incompleteTodoState";
import { pendingTodoState } from "../components/store/pendingTodoState";
import { workingTodoState } from "../components/store/workingTodoState";
import { completeTodoState } from "../components/store/completeTodoState";

import { useShowMessage } from "./useShowMessage";

export const useMoveItemFunc = () => {
  // 利用するグローバルstate
  const [todoText, setTodoText] = useRecoilState(inputTodoState);
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const [workingTodo, setWorkingTodo] = useRecoilState(workingTodoState);
  const [pendingTodo, setPendingTodo] = useRecoilState(pendingTodoState);
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  // メッセージ表示用の読み込み
  const { toastNotify } = useShowMessage();

  // 既存のアイテム移動系の処理
  // incompleteTodoへの処理
  // incompleteからworkingへ移動する処理を実装する
  const addToNewIncompleteTodo = useCallback(() => {
    if (todoText === "") {
      toastNotify("InputNone");
      return;
    }
    const newIncompleteTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newIncompleteTodo);
    setTodoText("");
    toastNotify("Input");
  }, [incompleteTodo, todoText]);

  const incompleteToWorking = useCallback(
    (index) => {
      const newIncompleteTodo = [...incompleteTodo];
      newIncompleteTodo.splice(index, 1);
      const newWorkingTodoForIncomplete = [
        ...workingTodo,
        incompleteTodo[index],
      ];
      setWorkingTodo(newWorkingTodoForIncomplete);
      setIncompleteTodo(newIncompleteTodo);
      toastNotify("Update");
    },
    [incompleteTodo, workingTodo]
  );
  // incompleteからpendingへ移動する処理
  const incompleteToPending = useCallback(
    (index) => {
      const newIncompleteTodo = [...incompleteTodo];
      newIncompleteTodo.splice(index, 1);
      const newPendingTodoforIncomplete = [
        ...pendingTodo,
        incompleteTodo[index],
      ];
      setPendingTodo(newPendingTodoforIncomplete);
      setIncompleteTodo(newIncompleteTodo);
      toastNotify("Update");
    },
    [incompleteTodo, pendingTodo]
  );
  // incompleteから削除する処理
  const incomleteItemDelete = useCallback(
    (index) => {
      const newIncompleteTodo = [...incompleteTodo];
      newIncompleteTodo.splice(index, 1);
      setIncompleteTodo(newIncompleteTodo);
      toastNotify("Delete");
    },
    [incompleteTodo]
  );

  // workingTodoへの処理
  // workingからpending
  const workingToPending = useCallback(
    (index) => {
      const newWorkingTodo = [...workingTodo];
      newWorkingTodo.splice(index, 1);
      const newPendingTodoForWorking = [...pendingTodo, workingTodo[index]];
      setPendingTodo(newPendingTodoForWorking);
      setWorkingTodo(newWorkingTodo);
      toastNotify("Update");
    },
    [pendingTodo, workingTodo]
  );
  // workingからcomplete
  const workingToComplete = useCallback(
    (index) => {
      const newWorkingTodo = [...workingTodo];
      newWorkingTodo.splice(index, 1);
      const newCompleteTodo = [...completeTodo, workingTodo[index]];
      setWorkingTodo(newWorkingTodo);
      setCompleteTodo(newCompleteTodo);
      toastNotify("Update");
    },
    [completeTodo, workingTodo]
  );

  // pendingTodoへの処理
  // pendingからincomplete
  const pendingToIncomplete = useCallback(
    (index) => {
      const newPendingTodo = [...pendingTodo];
      newPendingTodo.splice(index, 1);
      const newIncompleteTodoBackFromPending = [
        ...incompleteTodo,
        pendingTodo[index],
      ];
      setIncompleteTodo(newIncompleteTodoBackFromPending);
      setPendingTodo(newPendingTodo);
      toastNotify("Update");
    },
    [incompleteTodo, pendingTodo]
  );
  // pendingからworking
  const pendingToWorking = useCallback(
    (index) => {
      const newPendingTodo = [...pendingTodo];
      newPendingTodo.splice(index, 1);
      const newWorkingTodoForPending = [...workingTodo, pendingTodo[index]];
      setWorkingTodo(newWorkingTodoForPending);
      setPendingTodo(newPendingTodo);
      toastNotify("Update");
    },
    [pendingTodo, workingTodo]
  );

  // completeTodoへの処理
  // completeからincomplete
  const completeToIncomplete = useCallback(
    (index) => {
      const newCompleteTodo = [...completeTodo];
      newCompleteTodo.splice(index, 1);
      const newIncompleteTodoBackFromComplete = [
        ...incompleteTodo,
        completeTodo[index],
      ];
      setIncompleteTodo(newIncompleteTodoBackFromComplete);
      setCompleteTodo(newCompleteTodo);
      toastNotify("Update");
    },
    [completeTodo, incompleteTodo]
  );
  // completeから削除する処理
  const completeItemDelete = useCallback(
    (index) => {
      const newCompleteTodo = [...completeTodo];
      newCompleteTodo.splice(index, 1);
      setCompleteTodo(newCompleteTodo);
      toastNotify("Delete");
    },
    [completeTodo]
  );

  return {
    addToNewIncompleteTodo,
    incompleteToWorking,
    incompleteToPending,
    workingToPending,
    workingToComplete,
    pendingToIncomplete,
    pendingToWorking,
    completeToIncomplete,
    completeItemDelete,
    incomleteItemDelete,
  };
};
