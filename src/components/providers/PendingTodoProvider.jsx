import React, { createContext, useState } from "react";

// ↓のコンテキストは他の画面から呼び出すことがあるのでexportする必要があるということ
export const pendingTodoContext = createContext({});
// contextの中にはProviderが含まれる

export const PendingTodoProvider = (props) => {
  const { children } = props;
  const [pendingTodo, setPendingTodo] = useState([]);
  return (
    <pendingTodoContext.Provider value={[pendingTodo, setPendingTodo]}>
      {children}
    </pendingTodoContext.Provider>
  );
};
