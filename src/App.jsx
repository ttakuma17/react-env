import React, { useState } from "react";
import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { PendingTodo } from "./components/PendingTodo";
import { WorkingTodo } from "./components/WorkingTodo";
import "./styles.css";

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
  const bodyStyle = {
    fontFamily: "sans-serif",
    color: "rgb(23 35 123)",
  };
  const headerStyle = {
    width: "400px",
    color: "white",
    borderBottom: "solid 1px",
    backgroundColor: "rgb(23 35 123)",
    padding: "10px",
    fontWeight: "700",
  };
  const footerStyle = {
    backgroundColor: "rgb(23 35 123)",
    color: "white",
    width: "400px",
    padding: "0 10px 0 10px",
    textAlign: "right",
  };
  const todoAreaLayout = {
    width: "400px",
    minHeight: "50px",
    padding: "8px",
    margin: "8px",
  };
  const listRow = {
    display: "flex",
    alignItems: "center",
    paddingBottom: "4px",
  };
  const listTitle = {
    textAlign: "left",
    borderTop: "double 1px",
    borderBottom: "double 1px",
    paddingTop: "3px",
    paddingBottom: "3px",
  };
  const listText = {
    margin: "0",
  };
  const button = {
    padding: "4px 10px",
    marginLeft: "5px",
    color: "rgb(23 35 123)",
    border: "solid 0.2px",
    borderRadius: "24px",
  };
  return (
    <>
      <div style={bodyStyle}>
        <header style={headerStyle}>Manage Your Todo</header>
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          button={button}
        />
        <IncompleteTodo
          incompleteTodos={incompleteTodo}
          onClickWorking={onClickWorking}
          onClickPending={onClickPending}
          onClickDelete={onClickDelete}
          todoAreaLayout={todoAreaLayout}
          listRow={listRow}
          listTitle={listTitle}
          listText={listText}
          button={button}
        />
        <WorkingTodo
          workingTodos={workingTodo}
          onClickPending={onClickPending}
          onClickDone={onClickDone}
          todoAreaLayout={todoAreaLayout}
          listRow={listRow}
          listTitle={listTitle}
          listText={listText}
          button={button}
        />
        <PendingTodo
          pendingTodos={pendingTodo}
          onClickWorking={onClickWorking}
          onClickBackTodo={onClickBackTodo}
          todoAreaLayout={todoAreaLayout}
          listRow={listRow}
          listTitle={listTitle}
          listText={listText}
          button={button}
        />
        <CompleteTodo
          completeTodos={completeTodo}
          onClickBackTodo={onClickBackTodo}
          onClickDelete={onClickDelete}
          todoAreaLayout={todoAreaLayout}
          listRow={listRow}
          listTitle={listTitle}
          listText={listText}
          button={button}
        />
        <footer style={footerStyle}>Try to complete todo !</footer>
      </div>
    </>
  );
};
