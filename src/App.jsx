import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/Addform";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([
      { id: 1, name: "นายเอ", gender: "ชาย" },
      { id: 2, name: "นางบี", gender: "หญิง" },
      { id: 3, name: "นายซี", gender: "ชาย" },
      { id: 4, name: "นางสาวเอฟ", gender: "หญิง" }
    ]);

    const [theme,setTheme] = useState("light")
    
function deleteUser(id){ //3
    const result = data.filter((user)=>user.id!==id) //array ใหม่
    setData(result)
}

useEffect(()=>{
  console.log("Render Component")
},[data])

  return (
    <div className={theme}>

      <div className="app">
          <Header title="itkstudio my app" theme={theme} setTheme={setTheme}/>
          <AddForm data={data} setData={setData}/>
        <main>
          <PersonList data={data} deleteUser={deleteUser}/>
        </main>
      </div>
    </div>
  );
}

export default App;
