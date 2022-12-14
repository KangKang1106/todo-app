import React, { useState } from "react";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    addItem(todoItem); // {title: input 입력값}
    setTodoItem({ title: "" });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        className="add"
        type="text"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onKeyPress}
        placeholder="Add your new Todo"
      />
      <button className="addBtn" onClick={onButtonClick}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
