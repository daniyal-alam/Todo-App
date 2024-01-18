import "./App.module.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
function App() {
  const [color, setColor] = useState("Black"); // 0 is the initial value. value is used to get the value and setValue is used to set the value.

  const toggleColor = () => {
    if (color == "Black") {
      setColor("Yellow");
    } else {
      setColor("Black");
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [todoID, setTodoID] = useState();
  const [todoName, setTodoName] = useState();
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Hey!");
    const formBody = {
      name,
      email,
      message,
    };
    console.log(formBody);
    // Make API Call
  };

  useEffect(() => {
    async function todoItems() {
      console.log("Hey! I am called from useEffect");
      // API URL: https://dummyjson.com/todos/1
      const res = await fetch("https://dummyjson.com/todos/1");
      const respone = await res.json();
      console.log(respone);
      setTodoID(respone.id);
      setTodoName(respone.todo);
    }

    todoItems();
  }, []); // [] is array dependency. This is the second argument of useEffect. The first one is ().

  return (
    <>
      <Nav />
      <h1>This is App.jsx</h1>
      <h3>ID: {todoID}</h3>
      <h3>Todo Item: {todoName} </h3>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Hammad"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="me@hammad.com"
        />
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder="Hey there!"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
      <h1>Hello 10P!</h1>
      <button onClick={toggleColor}>Toggle Color</button>
      <input onChange={toggleColor} type="text" placeholder="Name" />
      <h2>My Favorite color is - {color}</h2>
      <Card name="Basic" price={5} children="This is a children content" />
      <Card name="Standard" price={10} />
      <Card name="Corporate" price={15} />
    </>
  );
}

export default App;
