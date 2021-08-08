
function App() {
  return (
    <div className="App">
    <h1>Task Manager</h1>
     
     <form autoComplete="off">
       <input type="text" id="taskmanger" name="taskmanger" 
       required placeholder="what needs to be done?"></input>
       <button type="submit">create</button>
     </form>

    <ul>
      <li>
        <label htmlFor="">
        <input type="checkbox" id=""/>
        Cooking task manger
        </label>
        <button>Edit</button>
      </li>

      <li>
        <label htmlFor="">
        <input type="checkbox" id=""/>
        Cooking task manger
        </label>
        <button>Edit</button>
      </li>
    </ul>

    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" name="all" id="all"></input>
        All
      </label>
      <p>You have 0 task to do</p>
      <button id="delete">Delete</button>
    </div>

    </div>
  );
}

export default App;
