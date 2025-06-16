// React와 useState 훅을 불러옵니다.
import React, { useState } from 'react';
// TodoForm 전용 CSS를 불러옵니다.
import './TodoForm.css'; // TodoForm.css import

// TodoForm 컴포넌트 정의
function TodoForm({ addTodo }) {
  // 입력 필드의 상태를 관리합니다.
  const [todoText, setTodoText] = useState('');

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    addTodo(todoText); // 입력값을 상위 컴포넌트로 전달
    setTodoText(''); // 입력 필드 초기화
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="새로운 할 일을 입력하세요" //안내 문구를 보여줌
        value={todoText} // value는 todoText 상태값과 연결되어 입력값을 관리
        onChange={(e) => setTodoText(e.target.value)} //onChange는 입력값이 바뀔 때마다 setTodoText로 상태를 업데이트
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;