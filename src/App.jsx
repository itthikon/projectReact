import { useState } from "react";


function App() {
const name = "ชาลี"
const address = "กรุงเทพมหานคร"
const [age,setAge]=useState(40)

function add(){
  setAge(age+1)
}
function subtract(){
  setAge(age-1)
}
function reset(){
  setAge(40)
}

  return (
  <>    
    <h1>สวัสดีครับคุณ {name}</h1>
    <h2>ที่อยู่ : {address}</h2>
    <h3>อายุ : {age} ปี</h3>
    <button onClick={add}>เพิ่ม</button>
    <button onClick={subtract}>ลด</button>
    <button onClick={reset}>เคลียร์</button>
  </>
  )
}

export default App;
