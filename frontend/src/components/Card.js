import axios from "axios";

const Card = (props) => {
  const deleteTodo = async (e) => {
    await axios.post(`http://127.0.0.1:8000/delete/${e.target.id}`);
    [...props.todoData].filter((todoe) => {
      return todoe.id !== e.target.id;
    });
  };

  const style = {
    cont: {
      margin: "20px auto",
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "blueviolet",
      color: "#fff",
      padding: "0px 15px",
      borderRadius: "5px",
      fontSize: "20px",
    },
    btn: {
      padding: "8px 15px",
      marginLeft: "10px",
      backgroundColor: "fff",
      color: "blueviolet",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={style.cont}>
        <p>{props.todo}</p>
        <div>
          <button style={style.btn} id={props.id} onClick={deleteTodo}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
