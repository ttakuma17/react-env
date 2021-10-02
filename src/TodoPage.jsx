import React, { memo } from "react";

import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { PendingTodo } from "./components/PendingTodo";
import { WorkingTodo } from "./components/WorkingTodo";
import { useButtonFunc } from "./hooks/useButtonFunc";

export const TodoPage = memo(() => {
  const {
    Toaster,
    onChangeTodoText,
    onClickAdd,
    onClickDelete,
    onClickWorking,
    onClickPending,
    onClickDone,
    onClickBackTodo,
  } = useButtonFunc();

  return (
    <div className="font-body">
      <Toaster />
      <InputTodo onChange={onChangeTodoText} onClick={onClickAdd} />
      <IncompleteTodo
        onClickWorking={onClickWorking}
        onClickPending={onClickPending}
        onClickDelete={onClickDelete}
      />
      <WorkingTodo onClickPending={onClickPending} onClickDone={onClickDone} />
      <PendingTodo
        onClickWorking={onClickWorking}
        onClickBackTodo={onClickBackTodo}
      />
      <CompleteTodo
        onClickBackTodo={onClickBackTodo}
        onClickDelete={onClickDelete}
      />
    </div>
  );
});
