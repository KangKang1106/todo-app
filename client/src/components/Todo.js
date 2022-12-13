// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 랜더링하는 컴포넌트
// 3. App (부모 컴퍼넌트)에서 Todo (자식 컴포넌트)를 랜더링

import { useState } from "react";

const Todo = ({ Mytodo, deleteItem }) => {
  const { id, title, done } = Mytodo;

  const [todoItem, setTodoItem] = useState(Mytodo);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem.id);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>

      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
};

export default Todo;
