import React from "react";

export const PendingTodo = (props) => {
  const {
    pendingTodos,
    onClickWorking,
    onClickBackTodo,
    todoAreaLayout,
    listRow,
    listTitle,
    listText,
    button,
  } = props;
  return (
    <div style={todoAreaLayout}>
      <p style={listTitle}>・Pending Todo List</p>
      <ul>
        {pendingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p style={listText}>{todo}</p>
                <button
                  onClick={() => {
                    onClickBackTodo(index, "pendinglist");
                  }}
                  style={button}
                >
                  Back Todo
                </button>
                <button
                  onClick={() => {
                    onClickWorking(index, "pendinglist");
                  }}
                  style={button}
                >
                  Working
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
