// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 랜더링하는 컴포넌트
// 3. App (부모 컴퍼넌트)에서 Todo (자식 컴포넌트)를 랜더링

const Todo = ({ Mytodo }) => {
  const { id, title, done } = Mytodo;

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
    </div>
  );
};

export default Todo;
