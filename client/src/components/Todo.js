import { useState } from "react";

const Todo = ({ Mytodo, deleteItem }) => {
  const { id, title, done } = Mytodo;
  const [todoItem, setTodoItem] = useState(Mytodo);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem.id);
  };

  // 사용자가 키보드 입력할 때마다 todoItem.title을 새 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // title input 클릭 시 readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title input에서 enter 키 입력 시 readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // checkbox 업데이트
  // done: true -> false / false -> true
  const checkboxEventHandler = () => {
    todoItem.done = !todoItem.done;
    setTodoItem(todoItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        readOnly={readOnly}
      />

      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
};

export default Todo;
