import React, { createContext, useState } from "react";

// ↓のコンテキストは他の画面から呼び出すことがあるのでexportする必要があるということ
export const completeTodoContext = createContext({});
// contextの中にはProviderが含まれる

export const ComepleteTodoProvider = (props) => {
  const { children } = props;
  const [completeTodo, setCompleteTodo] = useState([]);
  return (
    <completeTodoContext.Provider value={[completeTodo, setCompleteTodo]}>
      {children}
    </completeTodoContext.Provider>
  );
};
