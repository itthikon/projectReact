import { useState } from "react";


function App() {
  const [data,setdata]=useState([
    {id:1,name:"อิทธิกร",gender:"ชาย"},
    {id:2,name:"สิริมา",gender:"หญิง"},
    {id:3,name:"ยอด",gender:"ชาย"}
  ])
console.table(data)

  return (
  <>    
  <h1>จำนวนประชากร {data.length} คน</h1>
  <ul>
    {data.map((item) => (
      <li key={item.id}>{item.id} | {item.name} | {item.gender}</li>
      ))}
  </ul>
  </>
  )
}

export default App;
