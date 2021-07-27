
import React, { useState } from 'react';
import './App.css';
interface myItem{
  mytodo:string;
}
function App() {
  const [record, setRecord]=useState({mytodo:""}as  myItem);
  const[item,setItem]=useState([{mytodo:""}] as myItem[]);
  const  handleChange = (event:any)=>{
    setRecord({...record,[event.target.name]:event.target.value});
  }
  const addItem =(event:any)=>{
    var newItem=item;
    newItem.push();
    setItem([...item, record])
  }
  const deleteItem=(index: any)=>{
    var newItem=item
    newItem.splice(index,1);
  }
  return (
    <>
    <div><h1>TODO-LIST</h1></div>
    <div> <input onChange={handleChange} type="text" name="mytodo" 
          placeholder="Enter the item" value={record.mytodo}/>
    <button onClick={addItem}>Add</button>
    </div> 
    <div>
      <h3>Todo list items</h3>
      <ol>{item.map((items,index)=><li key={index}>
        <span>{items.mytodo}</span> 
        <button>Update</button> 
        <button onClick={deleteItem}>Delete</button></li>)}
      </ol>
    </div>
    </>
  );
}
export default App;
