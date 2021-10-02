import React from "react";
import { IncompleteTodoProvider } from "./components/providers/IncompleteTodoProvider";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WorkingTodoProvider } from "./components/providers/WorkingTodoProvider";
import { ComepleteTodoProvider } from "./components/providers/CompleteTodoProvider";
import { PendingTodoProvider } from "./components/providers/PendingTodoProvider";
import { InputTodoProvider } from "./components/providers/InputTodoProvider";

// App.jsが再レンダリングされると、Header.jsx Footer.jsxも再レンダリングされる
// Providerがネストされまくっているのがきれいではない、、、
export const App = () => {
  return (
    <IncompleteTodoProvider>
      <WorkingTodoProvider>
        <PendingTodoProvider>
          <ComepleteTodoProvider>
            <InputTodoProvider>
              <Header />
              <Footer />
            </InputTodoProvider>
          </ComepleteTodoProvider>
        </PendingTodoProvider>
      </WorkingTodoProvider>
    </IncompleteTodoProvider>
  );
};
