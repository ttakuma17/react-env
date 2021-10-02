import React, { createContext, useState } from "react";

// ↓のコンテキストは他の画面から呼び出すことがあるのでexportする必要があるということ
export const workingTodoContext = createContext({});
// contextの中にはProviderが含まれる

export const WorkingTodoProvider = (props) => {
  const { children } = props;
  const [workingTodo, setWorkingTodo] = useState([]);
  return (
    <workingTodoContext.Provider value={[workingTodo, setWorkingTodo]}>
      {children}
    </workingTodoContext.Provider>
  );
};
