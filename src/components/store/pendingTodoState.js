import { atom } from "recoil";

export const pendingTodoState = atom({
  key: "pendingTodoState",
  default: [],
});
