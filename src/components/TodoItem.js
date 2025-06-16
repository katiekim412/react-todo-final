// React를 불러옵니다.
import React from 'react';
// TodoItem 전용 CSS를 불러옵니다.
import './TodoItem.css'; // TodoItem.css import

// TodoItem 컴포넌트 정의
function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
    
     //props로 할 일 객체(todo), 완료 토글 함수(toggleComplete), 삭제 함수(deleteTodo)를 받음
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/*할 일이 완료되었으면(todo.completed가 true) 클래스에 'completed'가 추가되어 스타일이 바뀜*/}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)} //체크박스를 클릭하면 toggleComplete(todo.id)가 실행되어 완료 상태 토글
      />
      {/* 할 일 텍스트 표시 */}
      <span className="todo-text">{todo.text}</span>
      {/* 삭제 버튼 */}
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;