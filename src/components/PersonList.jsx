import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/react.svg";
import "./PersonList.css";

function PersonList(props) {
  const {data} = props;
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="header">
        <h2>จำนวนประชากร {data.length} คน</h2>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>

      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender=="ชาย" ? "green" : "pink"}}>
              <img
                src={item.gender === "ชาย" ? boy : girl}
                width={50}
                height={50}
              />
              <p>{item.name}</p>
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
