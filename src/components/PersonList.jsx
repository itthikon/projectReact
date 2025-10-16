import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import "./PersonList.css";
import User from "./User";


function PersonList({data, deleteUser}) {

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="header">
        <h2>จำนวนประชากร {data.length} คน</h2>

        <span onClick={() => setShow(!show)}>{show ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}</span>
      </div>

      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser}/>
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
