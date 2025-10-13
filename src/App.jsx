import { useState } from "react";


function App() {
const name = "ชาลี"
const address = "กรุงเทพมหานคร"
const [age,setAge]=useState(40)


  return (
  <>    
    <h1>สวัสดีครับคุณ {name}</h1>
    <h2>ที่อยู่ : {address}</h2>
    <h3>อายุ : {age} ปี</h3>
    <button onClick={()=>setAge(age + 1)}>เพิ่ม</button>
    <button onClick={()=>setAge(age - 1)}>ลด</button>
    <button onClick={()=>setAge(40)}>เคลียร์</button>
  </>
  )
}

export default App;
