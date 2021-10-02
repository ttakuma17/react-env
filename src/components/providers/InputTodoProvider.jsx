import React, { createContext, useState } from "react";

// ↓のコンテキストは他の画面から呼び出すことがあるのでexportする必要があるということ
export const inputTodoContext = createContext({});
// contextの中にはProviderが含まれる

export const InputTodoProvider = (props) => {
  const { children } = props;
  const [todoText, setTodoText] = useState("");
  return (
    <inputTodoContext.Provider value={[todoText, setTodoText]}>
      {children}
    </inputTodoContext.Provider>
  );
};
