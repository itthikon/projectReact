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

  </>
  )
}

export default App;
