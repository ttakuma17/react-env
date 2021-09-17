import React, { useState } from "react";
import { CompleteTodo } from "./components/CompleteTodo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { PendingTodo } from "./components/PendingTodo";
import { WorkingTodo } from "./components/WorkingTodo";

export const App = () => {
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
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newIncompleteTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newIncompleteTodo);
    setTodoText("");
  };
  const onClickDelete = (index, listname) => {
    switch (listname) {
      case "incompletelist": {
        const newIncompleteTodo = [...incompleteTodo];
        newIncompleteTodo.splice(index, 1);
        setIncompleteTodo(newIncompleteTodo);
        break;
      }

      case "completelist": {
        const newCompleteTodo = [...completeTodo];
        newCompleteTodo.splice(index, 1);
        setCompleteTodo(newCompleteTodo);
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
        break;
      }
      case "pendinglist": {
        const newPendingTodo = [...pendingTodo];
        newPendingTodo.splice(index, 1);
        const newWorkingTodoForPending = [...workingTodo, pendingTodo[index]];
        setWorkingTodo(newWorkingTodoForPending);
        setPendingTodo(newPendingTodo);
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
        break;
      }
      case "workinglist": {
        const newWorkingTodo = [...workingTodo];
        newWorkingTodo.splice(index, 1);
        const newPendingTodoForWorking = [...pendingTodo, workingTodo[index]];
        setPendingTodo(newPendingTodoForWorking);
        setWorkingTodo(newWorkingTodo);
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
        break;
      }
      default: {
        console.log("エラーが発生しています");
      }
    }
  };

  return (
    <>
      <div className="font-body">
        <Header />
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
        <Footer />
      </div>
    </>
  );
};
