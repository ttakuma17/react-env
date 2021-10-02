import { useContext, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { inputTodoContext } from "../components/providers/InputTodoProvider";
import { incompleteTodoContext } from "../components/providers/IncompleteTodoProvider";
import { workingTodoContext } from "../components/providers/WorkingTodoProvider";
import { completeTodoContext } from "../components/providers/CompleteTodoProvider";
import { pendingTodoContext } from "../components/providers/PendingTodoProvider";

export const useButtonFunc = () => {
  const [todoText, setTodoText] = useContext(inputTodoContext);
  const [incompleteTodo, setIncompleteTodo] = useContext(incompleteTodoContext);
  const [workingTodo, setWorkingTodo] = useContext(workingTodoContext);
  const [pendingTodo, setPendingTodo] = useContext(pendingTodoContext);
  const [completeTodo, setCompleteTodo] = useContext(completeTodoContext);
  const toastNotify = (action) => {
    switch (action) {
      case "Input":
        toast("Added new Todo");
        break;
      case "InputNone":
        toast("Should type your Todo");
        break;
      case "Update":
        toast("Updated Todo status");
        break;
      case "Delete":
        toast("Deleted your Todo");
        break;
      case "Complete":
        toast("Completed your Todo !!!");
        break;
      // no default
    }
  };
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = useCallback(() => {
    if (todoText === "") {
      toastNotify("InputNone");
      return;
    }
    const newIncompleteTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newIncompleteTodo);
    setTodoText("");
    toastNotify("Input");
  }, [incompleteTodo, todoText]);

  const onClickDelete = useCallback(
    (index, listname) => {
      switch (listname) {
        case "incompletelist": {
          const newIncompleteTodo = [...incompleteTodo];
          newIncompleteTodo.splice(index, 1);
          setIncompleteTodo(newIncompleteTodo);
          toastNotify("Delete");
          break;
        }

        case "completelist": {
          const newCompleteTodo = [...completeTodo];
          newCompleteTodo.splice(index, 1);
          setCompleteTodo(newCompleteTodo);
          toastNotify("Delete");
          break;
        }
        default: {
          console.log("エラーが発生しています");
        }
      }
    },
    [completeTodo, incompleteTodo]
  );

  const onClickWorking = useCallback(
    (index, listname) => {
      switch (listname) {
        case "incompletelist": {
          const newIncompleteTodo = [...incompleteTodo];
          newIncompleteTodo.splice(index, 1);
          const newWorkingTodoForIncomplete = [
            ...workingTodo,
            incompleteTodo[index],
          ];
          setWorkingTodo(newWorkingTodoForIncomplete);
          setIncompleteTodo(newIncompleteTodo);
          toastNotify("Update");
          break;
        }
        case "pendinglist": {
          const newPendingTodo = [...pendingTodo];
          newPendingTodo.splice(index, 1);
          const newWorkingTodoForPending = [...workingTodo, pendingTodo[index]];
          setWorkingTodo(newWorkingTodoForPending);
          setPendingTodo(newPendingTodo);
          toastNotify("Update");
          break;
        }
        default: {
          console.log("エラーが発生しています");
        }
      }
    },
    [incompleteTodo, pendingTodo, workingTodo]
  );
  const onClickPending = useCallback(
    (index, listname) => {
      switch (listname) {
        case "incompletelist": {
          const newIncompleteTodo = [...incompleteTodo];
          newIncompleteTodo.splice(index, 1);
          const newPendingTodoforIncomplete = [
            ...pendingTodo,
            incompleteTodo[index],
          ];
          setPendingTodo(newPendingTodoforIncomplete);
          setIncompleteTodo(newIncompleteTodo);
          toastNotify("Update");
          break;
        }
        case "workinglist": {
          const newWorkingTodo = [...workingTodo];
          newWorkingTodo.splice(index, 1);
          const newPendingTodoForWorking = [...pendingTodo, workingTodo[index]];
          setPendingTodo(newPendingTodoForWorking);
          setWorkingTodo(newWorkingTodo);
          toastNotify("Update");
          break;
        }
        default: {
          console.log("エラーが発生しています");
        }
      }
    },
    [incompleteTodo, pendingTodo, workingTodo]
  );
  const onClickDone = useCallback(
    (index) => {
      const newWorkingTodo = [...workingTodo];
      newWorkingTodo.splice(index, 1);
      const newCompleteTodo = [...completeTodo, workingTodo[index]];
      setWorkingTodo(newWorkingTodo);
      setCompleteTodo(newCompleteTodo);
      toastNotify("Complete");
    },
    [completeTodo, workingTodo]
  );
  const onClickBackTodo = useCallback(
    (index, listname) => {
      switch (listname) {
        case "completelist": {
          const newCompleteTodo = [...completeTodo];
          newCompleteTodo.splice(index, 1);
          const newIncompleteTodoBackFromComplete = [
            ...incompleteTodo,
            completeTodo[index],
          ];
          setIncompleteTodo(newIncompleteTodoBackFromComplete);
          setCompleteTodo(newCompleteTodo);
          toastNotify("Update");
          break;
        }
        case "pendinglist": {
          const newPendingTodo = [...pendingTodo];
          newPendingTodo.splice(index, 1);
          const newIncompleteTodoBackFromPending = [
            ...incompleteTodo,
            pendingTodo[index],
          ];
          setIncompleteTodo(newIncompleteTodoBackFromPending);
          setPendingTodo(newPendingTodo);
          toastNotify("Update");
          break;
        }
        default: {
          console.log("エラーが発生しています");
        }
      }
    },
    [completeTodo, incompleteTodo, pendingTodo]
  );
  return {
    Toaster,
    onChangeTodoText,
    onClickAdd,
    onClickDelete,
    onClickWorking,
    onClickPending,
    onClickDone,
    onClickBackTodo,
  };
};

// onClickWorking onClickPending onClickDone onClickBackTodoは本質的には同じ処理をしている
// 1つの関数にして引数によって処理を切り分けたい
// onClickMove とかの関数を指定して、引数として移動元リスト、移動先リスト、indexの3つがあればなんとか
// 上記が可能になれば、引き渡すものが5つにできるが、依存関係が複数になる？
// setするリストの判定を関数側でどのようにするかが問題になる
