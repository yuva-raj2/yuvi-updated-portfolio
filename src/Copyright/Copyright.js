import React from "react"
const Copyright=()=>{
    const todayyear=new Date();
  return (
    <footer className="App">Copyright &copy; Yuvi dated on {todayyear.getDate()}/01/{todayyear.getFullYear()}</footer>
  )
}

export default Copyright