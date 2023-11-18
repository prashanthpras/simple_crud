import { useState } from 'react';
import './App.css';


const App=()=> {

  let [todo,setTodo] = useState({
    name:""
  })
  let [dataList,setDataList] = useState([])
  let [editIndex,setEditIndex] = useState(null) 
    
  const handleTodo=(e)=>{
    setTodo({name:e.target.value})
   
  }

  const handleData=(e)=>{
   e.preventDefault();
  if(editIndex !== null){
    let updateIndex = [...dataList]
     updateIndex[editIndex] = todo;
     setDataList(updateIndex)
     setEditIndex(null)
  }else{
     setDataList([...dataList,todo])
  }
    setTodo({name:""})
  }
  const handleDelete =(index)=> {
    setDataList(dataList.filter((data,ind) => ind !== index)) 
  }
  const handleEdit=(index)=>{
      setEditIndex(index);
      setTodo(dataList[index]);

  }

  return (
    <div className='mainContainer' >
      <label for="thingtodo">Enter the thing you wanted to do</label>
   <div>
    <span> <input type="text" name="todo" value={todo.name} onChange={handleTodo}  /></span><span><button id="addBtn" onClick={handleData}>{editIndex !== null ? "Update":"Add"}</button></span>
    
   </div>
   
 { dataList.length > 0 ?<div id="card">
  {dataList.map((data,index)=>{
   return (
    <div className='cardContainer' key={index}>
    <div>
      <i><h1>{data.name}</h1></i>
    </div>
   <div>
     <button id="delBtn" onClick={()=>handleDelete(index)}>Delete</button>
    <button id="editBtn" onClick={()=>handleEdit(index)}>Edit</button>
   </div>
    
  </div>
   )
  })}
 </div>:""}
    </div>
  );
}

export default App;
