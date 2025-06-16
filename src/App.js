import React, { useState } from 'react'; // React와 useState 훅을 불러옵니다.
import TodoForm from './components/TodoForm'; // 할 일 입력 폼 컴포넌트 import
import TodoList from './components/TodoList'; // 할 일 목록 컴포넌트 import
import './App.css'; // App 전체에 적용할 CSS import

function App() { // App 컴포넌트 정의 시작
  const [todos, setTodos] = useState([]); // 할 일 목록 상태, 빈 배열로 초기화
  const [nextId, setNextId] = useState(1); // 다음 할 일에 부여할 고유 ID, 1로 초기화

  // 할 일 추가 함수
  const addTodo = (text) => {
    if (text.trim() === '') { // 입력값이 비어있으면
      alert('할 일을 입력해주세요!'); // 경고창 표시
      return; // 함수 종료
    }
    const newTodo = { // 새 할 일 객체 생성
      id: nextId, // 고유 ID 부여
      text: text, // 할 일 내용
      completed: false, // 완료 여부(처음엔 미완료)
    };
    setTodos([...todos, newTodo]); // 기존 목록에 새 할 일 추가
    setNextId(nextId + 1); // 다음 ID로 증가
  };

  // 할 일 완료 상태 토글 함수
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // id가 일치하면 완료 상태 반전
      )
    );
  };

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // id가 일치하지 않는 것만 남김
  };

  return ( // 실제 화면에 렌더링되는 부분
    <div className="App">
      <h1>My ToDo List</h1> {/* 앱 제목 */}
      <TodoForm addTodo={addTodo} /> {/* 할 일 입력 폼 */}
      <TodoList
        todos={todos} // 할 일 목록 전달
        toggleComplete={toggleComplete} // 완료 토글 함수 전달
        deleteTodo={deleteTodo} // 삭제 함수 전달
      />
    </div>
  );
}

export default App; // App 컴포넌트 내보내기