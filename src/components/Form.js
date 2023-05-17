import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    // console.log("e", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
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
  );
}
