import React from "react";
import toast from "react-hot-toast";

function App() {

  function showSuccess(){
    toast.success("Rohit Hit the Six");
  }

  

  function showError() {
    toast.error("Something went wrong!");
  }

  function showNormal() {
    toast("Just a normal toast message");
  }

  return (
    <div className="p-5">
      <button onClick={showSuccess}>Show Success</button>
      <br /><br />
      <button onClick={showError}>Show Error</button>
      <br /><br />
      <button onClick={showNormal}>Show Normal Toast</button>
    </div>
  );
}

export default App;
