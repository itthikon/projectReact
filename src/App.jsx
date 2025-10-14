import Header from "./components/Header";
import PersonList from "./components/PersonList";
import {useState} from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([
      { id: 1, name: "นายเอ", gender: "ชาย" },
      { id: 2, name: "นางบี", gender: "หญิง" },
      { id: 3, name: "นายซี", gender: "ชาย" },
      { id: 4, name: "นางสาวเอฟ", gender: "หญิง" }
    ]);
  return (
      <div className="app">
          <Header title="itkstudio my app"/>
        <main>
          <PersonList data={data}/>
        </main>
      </div>
  );
}

export default App;
