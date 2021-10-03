import { atom } from "recoil";

// 初期値をRecoil側で設定してdefault側へ突っ込んでもいいかな
// カスタムフックをここで呼び出して、WebAPIへ取りに行く
// 取得した値をdefaultに格納したらいい

export const incompleteTodoState = atom({
  key: "incompleteTodoState",
  default: [],
});
