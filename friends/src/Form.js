import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const Form = () => {
  const [form, setForm] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login please.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleInput} />
        <input type="password" name="password" onChange={handleInput} />
        <button onClick={handleSubmit}>Login</button>
        <pre>{JSON.stringify(form)}</pre>
      </form>
    </div>
  );
};

export default Form;
