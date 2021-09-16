import React from "react";

export const IncompleteTodo = (props) => {
  const {
    incompleteTodos,
    onClickWorking,
    onClickPending,
    onClickDelete,
    todoAreaLayout,
    listRow,
    listTitle,
    listText,
    button,
  } = props;
  return (
    <div style={todoAreaLayout}>
      <p style={listTitle}>・Todo List</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p style={listText}>{todo}</p>
                <button
                  onClick={() => {
                    onClickWorking(index, "incompletelist");
                  }}
                  style={button}
                >
                  Working
                </button>
                <button
                  onClick={() => {
                    onClickPending(index, "incompletelist");
                  }}
                  style={button}
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index, "incompletelist");
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
