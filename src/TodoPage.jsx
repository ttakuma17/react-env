import React, { useState, memo, useCallback, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { PendingTodo } from "./components/PendingTodo";
import { WorkingTodo } from "./components/WorkingTodo";

export const TodoPage = memo(() => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([
    "未完了のTodo１",
    "未完了のTodo2",
  ]);
  const [workingTodo, setWorkingTodo] = useState([
    "処理中のTodo１",
    "処理中のTodo2",
  ]);
  const [pendingTodo, setPendingTodo] = useState([
    "保留中のTodo１",
    "保留中のTodo2",
  ]);
  const [completeTodo, setCompleteTodo] = useState([
    "完了したTodo１",
    "完了したTodo2",
  ]);

  const getJsonData = () => {
    const data = axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const result = res.data[1].title;
        return result;
      })
      .catch((err) => console.log(err));
    return data;
  };

  useEffect(
    getJsonData().then(
      (data) => {
        // resolveの処理
        console.log(data);
        // const initIncompleteTodo = [...incompleteTodo, data];
        // setIncompleteTodo(initIncompleteTodo);
        // 一旦テキストを取り出して、データ表示はできたが無限ループに陥った
        // const initIncompleteTodo = incompleteTodo.push(data);
        // setIncompleteTodo(initIncompleteTodo);// typeError: Unhandled Rejection
      },
      () => {
        // rejectの処理
        console.log("rejectされた");
      }
    ),
    []
  );

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

  return (
    <div className="font-body">
      <Toaster />
      {console.log("TodoPageがレンダリングされました")}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodo}
        onClickWorking={onClickWorking}
        onClickPending={onClickPending}
        onClickDelete={onClickDelete}
      />
      <WorkingTodo
        workingTodos={workingTodo}
        onClickPending={onClickPending}
        onClickDone={onClickDone}
      />
      <PendingTodo
        pendingTodos={pendingTodo}
        onClickWorking={onClickWorking}
        onClickBackTodo={onClickBackTodo}
      />
      <CompleteTodo
        completeTodos={completeTodo}
        onClickBackTodo={onClickBackTodo}
        onClickDelete={onClickDelete}
      />
    </div>
  );
});
