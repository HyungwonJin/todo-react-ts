import { IToDo } from "../atoms";

const ToDo = ({ text }: IToDo) => {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
