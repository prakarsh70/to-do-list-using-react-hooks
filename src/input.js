import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

const Sample = () => {
  let [array1, setArray] = useState([]);
  const toDoInput = useRef();
  useEffect(() => {
    axios.get('https://6563642eee04015769a72401.mockapi.io/shop/Todolist')
    .then( res => 
      setArray(res.data)
    )
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
    if (e.target.value) {
      let list = [...array1];
      let index = array1.indexOf(e.target.value);
      list.splice(index, 1);
      setArray(list);
      console.log(e.target.value);
    }
    console.log(e.target.value);
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
              className="row"
              key={items.toString()}
              style={{
                margin: "1rem auto",
                cursor: "pointer",
                textAlign: "center",
                maxWidth: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                value={items.taskName}
                className="col-9 btn"
                name="todo"
                onClick={handleTask}
                style={{
                  background: "lightBlue",
                  padding: "0.8rem",
                  fontWeight: "bold",
                  fontSize: "1rem"
                }}
                onMouseEnter={e => {
                  e.target.style.background = "#2d6cdf";
                }}
                onMouseLeave={e => {
                  e.target.style.background = "lightBlue";
                }}
              >
                {items.taskName}
              </div>
              <div className="col-3">
                <button
                  type="button"
                  value={items}
                  onClick={handleTask}
                  className="btn"
                  style={{ background: "#f98a95", height: "50px" }}
                >
                </button>
              </div>
            </div>
          );
        })}
        <form
          onSubmit={addToDo}
          style={{ maxWidth: "300px", margin: " auto" }}
          className="text-center"
        >
          <div className="row mx-0">
            <div className="form-group col-9 px-0 ">
              <input
                type="input"
                className="form-control"
                placeholder="Enter a to-do item"
                ref={toDoInput}
              />
            </div>
            <div className="col-3 px-0">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="App" />
      </div>
      <div />
    </div>
  );
};
export default Sample;
