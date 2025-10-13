import { useState } from "react";


function App() {
const name = "ชาลี"
const address = "กรุงเทพมหานคร"
const [age,setAge]=useState(40)

function add(){

}
function subtract(){

}
  return (
  <>    
    <h1>สวัสดีครับคุณ {name}</h1>
    <h2>ที่อยู่ : {address}</h2>
    <h3>อายุ : {age} ปี</h3>
    <button onClick={add}>เพิ่ม</button>
    <button onClick={subtract}>ลด</button>
  </>
  )
}

export default App;
