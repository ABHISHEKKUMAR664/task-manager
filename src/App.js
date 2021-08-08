import React from 'react'
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
import List from "./component/List";

function App() {
  return (
    <div className="App">
    <h1>Task Manager</h1>
     
     <FormInput/>
      <List/>
       <Footer/>

    

    </div>
  );
}

export default App;
