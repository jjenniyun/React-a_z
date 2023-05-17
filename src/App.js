import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    // console.log("e", e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // form 안에 input 전송할 때 페이지 새로고침 되는 것을 막아줌
    e.preventDefault();

    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 원래 있던 할일에 새로운 할일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
        </div>

        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button
              style={btnStyle}
              onClick={() => handleClick(data.id)}
            >
              x
            </button>
          </div>
        ))}

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Todo List 작성"
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Todo List 작성하기"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
