import React, { useRef, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import "./styles/Todo.scss";
import "./styles/App.scss";

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

  const deleteItem = (targetItem) => {
    const newTodoItem = todoItems.filter((a) => a.id !== targetItem);
    setTodoItems(newTodoItem);
  };

  return (
    <div className="App">
      <header>😀Sean Todo App</header>
      <AddTodo addItem={addItem} />
      <div className="left-todos">🚀 {todoItems.length} Todos</div>
      {todoItems.length > 0 ? (
        todoItems.map((item) => {
          // console.log(item); // {id: 1, title: 'My Todo1', done: false}
          return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
        })
      ) : (
        <p className="empty-todos">Todo를 추가해주세요🔥</p>
      )}
    </div>
  );
};

export default App;
