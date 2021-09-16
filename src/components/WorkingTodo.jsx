import React from "react";

export const WorkingTodo = (props) => {
  const {
    workingTodos,
    onClickPending,
    onClickDone,
    todoAreaLayout,
    listRow,
    listTitle,
    listText,
    button,
  } = props;
  return (
    <div style={todoAreaLayout}>
      <p style={listTitle}>・Working Todo</p>
      <ul>
        {workingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p style={listText}>{todo}</p>
                <button
                  onClick={() => {
                    onClickPending(index, "workinglist");
                  }}
                  style={button}
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    onClickDone(index);
                  }}
                  style={button}
                >
                  Done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
