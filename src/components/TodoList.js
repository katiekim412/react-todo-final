// React를 불러옵니다.
import React from 'react';
// 할 일 항목 컴포넌트를 불러옵니다.
import TodoItem from './TodoItem';
// TodoList 전용 CSS를 불러옵니다.
import './TodoList.css'; // TodoList.css import

// TodoList 컴포넌트 정의
function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {/* todos 배열을 순회하며 TodoItem 컴포넌트를 렌더링 */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // 각 항목의 고유 key
          todo={todo} // 할 일 데이터 전달
          toggleComplete={toggleComplete} // 완료 토글 함수 전달
          deleteTodo={deleteTodo} // 삭제 함수 전달
        />
      ))}
    </ul>
  );
}

export default TodoList;