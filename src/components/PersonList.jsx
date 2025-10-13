import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/react.svg";

const PersonList = () => {
  const [data, setdata] = useState([
    { id: 1, name: "อิทธิกร", gender: "ชาย" },
    { id: 2, name: "สิริมา", gender: "หญิง" },
    { id: 3, name: "ยอด", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>

      <ul>
        {show && data.map((item) => (
          <li key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.gender=="ชาย" ? boy : girl} width={50} height={50}/>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PersonList;
