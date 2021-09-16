import React from "react";

export const CompleteTodo = (props) => {
  const {
    completeTodos,
    onClickBackTodo,
    onClickDelete,
    todoAreaLayout,
    listRow,
    listTitle,
    listText,
    button,
  } = props;
  return (
    <div style={todoAreaLayout}>
      <p style={listTitle}>・Complete Todo List</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p style={listText}>{todo}</p>
                <button
                  onClick={() => {
                    onClickBackTodo(index, "completelist");
                  }}
                  style={button}
                >
                  Back Todo
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index, "completelist");
                  }}
                  style={button}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
