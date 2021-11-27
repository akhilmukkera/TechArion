import React, { useState } from "react";
import axios from "axios";

const Postapi = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setData((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post(" https://admin.srkprojects.com/web/api/client/v1/contact-us/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler} >
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter name"
          onChange={changeHandler}
          value={data.name}
        ></input>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Enter email"
          onChange={changeHandler}
          value={data.email}
        ></input>
        <input
          type="text"
          className="form-control"
          name="message"
          placeholder="Enter message"
          onChange={changeHandler}
          value={data.message}
        ></input>
        <button type="submit" className="btn">submit</button>
      </form>
    </div>
  );
};

export default Postapi;