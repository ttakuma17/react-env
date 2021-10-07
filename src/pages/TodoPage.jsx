import React, { memo } from "react";
import { Toaster } from "react-hot-toast";

import { CompleteTodo } from "../components/CompleteTodo";
import { IncompleteTodo } from "../components/IncompleteTodo";
import { InputTodo } from "../components/InputTodo";
import { PendingTodo } from "../components/PendingTodo";
import { WorkingTodo } from "../components/WorkingTodo";

export const TodoPage = memo(() => {
  return (
    <div className="font-body">
      <Toaster />
      <InputTodo />
      <IncompleteTodo />
      <WorkingTodo />
      <PendingTodo />
      <CompleteTodo />
    </div>
  );
});
