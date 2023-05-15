import { useState } from 'react';
import './AddToList.css'

const AddToList = (props) => {

  const [value, setValue] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    
    const newActivity = {
    id: Math.random(),
    text: value,
    active: false
    }
    setValue('')
  props.addActivity(newActivity)
  }
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input className='input' type="text" value={value} placeholder="Add your new Todo" onChange={(e)=>setValue(e.target.value)}/>
        <button className='btn' onClick={() => handleSubmit}>+</button>
      </form>
    </div>
    )
}
export default AddToList;