import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/react.svg";
import "./PersonList.css";

const PersonList = () => {
  const [data, setdata] = useState([
    { id: 1, name: "นายเอ", gender: "ชาย" },
    { id: 2, name: "นางบี", gender: "หญิง" },
    { id: 3, name: "นายซี", gender: "ชาย" },
    { id: 4, name: "นางสาวเอฟ", gender: "หญิง" },
  ]);
  const [show, setShow] = useState(true);

  const mystyle = {
    color:"red",
    fontSize: "26px"
  }

  return (
    <div class="container">
      <div className="header">
        <h2 style={mystyle}>จำนวนประชากร {data.length} คน</h2>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>

      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender=="ชาย" ? "green" : "pink"}}>
              <img
                src={item.gender == "ชาย" ? boy : girl}
                width={50}
                height={50}
              />
              <p style={mystyle}>{item.name}</p>
              <div className="control">
                <button>ลบข้อมูล</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
