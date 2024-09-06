import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleClick}>
      Delete
    </Button>
  );
}

export default DeleteItem;
