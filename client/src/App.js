import React, { useRef, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);

  const todoId = useRef(4);
  const addItem = (newItem) => {
    newItem.id = todoId.current++; // key를 위한 id 설정
    newItem.done = false; // done 초기화
    // 기존 todoItems를 유지하고 새로운 newItem 추가
    setTodoItems([...todoItems, newItem]);
    // setTodoItems(todoItems.concat(newItem));
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((a) => {
        return <Todo key={a.id} Mytodo={a} />;
      })}
    </div>
  );
};

export default App;
