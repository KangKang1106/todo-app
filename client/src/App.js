import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import "./styles/Todo.scss";
import "./styles/App.scss";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const todoId = useRef(4);

  useEffect(() => {
    console.log("첫 랜더링 완료!");
    const getTodos = async () => {
      let response = await axios.get("http://localhost:8081/todos");
      setTodoItems(response.data);
    };
    getTodos();
  }, []);

  // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
  // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
  // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
  const addItem = async (newItem) => {
    // axios.post(url, data)

    // [Before]
    // // newItem - {id: xx, title: xx, done: false}
    // newItem.id = todoId.current++; // key를 위한 id 설정
    // newItem.done = false; // done 초기화
    // // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    // setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))

    // [After]
    const response = await axios.post("http://localhost:8081/todo", newItem);
    // console.log(response.data);
    // 기존 아이템: ...todoItems
    // 새로운 아이템: response.data
    setTodoItems([...todoItems, response.data]);
  };

  // 전체 Todo 리스트(todoItems)는 App 컴포넌트에서 관리하고 있으므로
  // deleteItem() 함수는 App 컴포넌트에 작성해야 함
  const deleteItem = async (targetItem) => {
    // [Before]
    // let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // setTodoItems(newTodoItems);

    // [After]
    console.log(targetItem);
    await axios.delete(`http://localhost:8081/todo/${targetItem.id}`);
    let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <header>😀Kang Todo App</header>
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
