// import axios from "axios";
// import { useState } from "react";

// export const useGetTodos = () => {
//   const [todoData, setTodoData] = useState([]);
//   const wgetJsonData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         const todos = res.data.map((todo) => ({
//           id: todo.id,
//           title: todo.title,
//         }));
//         setTodoData(todos);
//       })
//       .catch((err) => console.log(err));
//   };
//   return { todoData, wgetJsonData };
// };
