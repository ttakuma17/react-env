import toast from "react-hot-toast";
import { useCallback } from "react/cjs/react.development";

export const useShowMessage = () => {
  const toastNotify = useCallback((action) => {
    switch (action) {
      case "Input":
        toast("Added new Todo");
        break;
      case "InputNone":
        toast("Should type your Todo");
        break;
      case "Update":
        toast("Updated Todo status");
        break;
      case "Delete":
        toast("Deleted your Todo");
        break;
      case "Complete":
        toast("Completed your Todo !!!");
        break;
      // no default
    }
  }, []);
  return { toastNotify };
};
