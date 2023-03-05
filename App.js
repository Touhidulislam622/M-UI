import * as React from "react";
import Header from "./HEADER/Header";
// import RcDrower from "./RCDRAWER/Rcdrower";
import Dashboard from "./DASHBOARD/Dashboard";
 import Tabledata from "./TABLEDATA/Tabledata";



function App() {
  return (
    <>
      <Header/>
      {/* <RcDrower/> */}
      <Dashboard/>
      <Tabledata/>
    </>
  );
}

export default App;
