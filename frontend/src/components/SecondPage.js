import { Link } from "react-router-dom";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ObjList = () => {
  const [todo, setTodo] = useState({ todo: "" });
  const history = useNavigate();

  const changeHandler = (e) => {
    setTodo((prev) => ({ ...prev, todo: e.target.value }));
  };

  const [todoData, setTodoData] = useState([]);

  const getData = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        const data = res.data;
        setTodoData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/", { ...todo })
      .then((response) => {
        console.log(response.data);
        history("/obj-list");
      });
    e.target.value = "";
  };

  const style = {
    nav: {
      textAlign: "start",
      padding: "10px 20px",
      backgroundColor: "blueviolet",
      link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "25px",
      },
    },

    form: {
      display: "flex",
      marginTop: "30px",
      justifyContent: "Center",
      input: {
        padding: "10px 10px",
        width: "400px",
        outline: "none",
      },
      button: {
        padding: "10px 15px",
        backgroundColor: "blueviolet",
        border: "2px solid blueviolet",
        marginLeft: "10px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "15px",
        borderRadius: "2px",
      },
    },
  };
  return (
    <>
      <nav style={style.nav}>
        <Link to="/" style={style.nav.link}>
          Back
        </Link>
      </nav>
      <form style={style.form} onSubmit={postData}>
        <input
          type="text"
          placeholder="Add item"
          value={todo.todo}
          onChange={changeHandler}
          style={style.form.input}
        />
        <div>
          <button type="submit" style={style.form.button}>
            Add
          </button>
        </div>
      </form>
      {[...todoData].reverse().map((todoe, index) => (
        <Card
          todo={todoe.todo}
          key={todoe.id}
          id={todoe.id}
          todoData={todoData}
          index={index}
        />
      ))}
    </>
  );
};

export default ObjList;
