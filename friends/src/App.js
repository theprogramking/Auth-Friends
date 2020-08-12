import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="App">
      <form onSubmit={this.handleInput}>
        <input type="text" name="username" />
        <input type="password" name="password" />
      </form>
    </div>
  );
}

export default App;
