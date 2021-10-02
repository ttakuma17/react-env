import React, { createContext, useState } from "react";

// ↓のコンテキストは他の画面から呼び出すことがあるのでexportする必要があるということ
export const incompleteTodoContext = createContext({});
// contextの中にはProviderが含まれる

export const IncompleteTodoProvider = (props) => {
  const { children } = props;
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  return (
    <incompleteTodoContext.Provider value={[incompleteTodo, setIncompleteTodo]}>
      {children}
    </incompleteTodoContext.Provider>
  );
};
