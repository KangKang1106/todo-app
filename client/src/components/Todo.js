import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ item, deleteItem }) => {
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
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
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      <input
        className="hideBtn"
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      <label className="checkBtn" htmlFor={`todo${id}`}></label>
      <input
        className="list"
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        readOnly={readOnly}
      />

      <button className="delBtn" id="delBtn" onClick={onDeleteButtonClick}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <label htmlFor="delBtn"></label>
    </div>
  );
};

export default Todo;
