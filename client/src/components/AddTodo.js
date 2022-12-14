import React, { useRef, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const titleRef = useRef();

  const titleFocus = () => {
    titleRef.current.focus();
  };

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    if (
      todoItem.title === "" ||
      todoItem.title.replace(/(\s*)/g, "", "") === ""
    ) {
      alert("할 일을 입력해주세요");
      titleRef.current.focus();
    } else {
      addItem(todoItem); // {title: input 입력값}
      setTodoItem({ title: "" });
    }
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
        ref={titleRef}
        placeholder="Add your new Todo"
        autoFocus
      />
      <button className="addBtn" onClick={onButtonClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddTodo;
