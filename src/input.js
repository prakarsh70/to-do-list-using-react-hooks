import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Sample = () => {
  let [array1, setArray] = useState(["Eat", "Sleep", "Ride", "Repeat"]);
  const toDoInput = useRef();
  useEffect(() => {
    toDoInput.current && toDoInput.current.focus();
  });
  const addToDo = e => {
    e.preventDefault();
    if (toDoInput.current.value) {
      let list = [...array1];
      list = [...list, toDoInput.current.value];
      setArray(list);
      toDoInput.current.value = null;
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
        to-do list using react hooks
      </h3>
      <div>
        {array1.map(items => {
          return (
            <div
              type="button"
              value={items}
              key={items.toString()}
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
                e.target.style.background = "#2d6cdf";
              }}
              onMouseLeave={e => {
                e.target.style.background = "lightBlue";
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
              className="form-control"
              placeholder="Enter a to-do item"
              ref={toDoInput}
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
