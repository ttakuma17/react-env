import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { PendingTodo } from "./components/PendingTodo";
import { WorkingTodo } from "./components/WorkingTodo";

export const TodoPage = () => {
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
  const toastNotify = (action) => {
    switch (action) {
      case "Input":
        toast("Added new Todo");
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
  const onClickAdd = () => {
    if (todoText === "") return;
    const newIncompleteTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newIncompleteTodo);
    setTodoText("");
    toastNotify("Input");
  };
  const onClickDelete = (index, listname) => {
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
  };

  const onClickWorking = (index, listname) => {
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
  };
  const onClickPending = (index, listname) => {
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
  };
  const onClickDone = (index) => {
    const newWorkingTodo = [...workingTodo];
    newWorkingTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodo, workingTodo[index]];
    setWorkingTodo(newWorkingTodo);
    setCompleteTodo(newCompleteTodo);
    toastNotify("Complete");
  };
  const onClickBackTodo = (index, listname) => {
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
  };
  return (
    <div className="font-body">
      <Toaster />
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
};
