import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Sample = () => {
  let [array1, setArray] = useState(["foo", "bar", "zoo"]);
  let [input, setInput] = useState("");
  let [element, setElement] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const addToDo = e => {
    e.preventDefault();
    if (input) {
      let list = [...array1];
      list = [...list, input];
      setArray(list);
      setInput("");
    }
  };
  const handleTask = e => {
    let list = [...array1];
    let index = array1.indexOf(e.currentTarget.innerHTML);
    list.splice(index, 1);
    setArray(list);
  };
  return (
    <div>
      <h3 className="text-center text-primary p-1 mb-5 font-weight-bold">
        to do using react hooks
      </h3>
      <div>
        {array1.map(items => {
          return (
            <div
              type="button"
              value={items}
              name="todo"
              onClick={handleTask}
              style={{
                cursor: "pointer",
                background: "lightBlue",
                padding: "1rem",
                borderRadius: "0.4rem",
                textAlign: "center",
                fontWeight: "bold",
                maxWidth: "300px",
                margin: " 1rem auto"
              }}
              onMouseEnter={e => {
                setElement(e.currentTarget.innerHTML);
                e.target.style.background = "#2d6cdf";
                e.currentTarget.innerHTML = "tap to delete";
              }}
              onMouseLeave={e => {
                e.target.style.background = "lightBlue";
                e.currentTarget.innerHTML = element;
                setElement("");
              }}
            >
              {items}
            </div>
          );
        })}
        <form
          onSubmit={addToDo}
          style={{ maxWidth: "300px", margin: " 1rem auto" }}
          className="text-center"
        >
          <div className="form-group">
            <input
              type="input"
              onChange={handleChange}
              value={input}
              className="form-control"
              placeholder="Enter a to-do item"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <div className="App" />
      </div>
      <div />
    </div>
  );
};
export default Sample;
