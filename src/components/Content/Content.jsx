import React, { useState } from 'react';

import BIN from '../../icos/icos';

import './Content.css'

const Content = ({activities, setActivities, removeItem}) => {


  function handleClick(event) {
    console.log(event.target.id);
    activities[event.target.id].active = !activities[event.target.id].active 
    setActivities([...activities])
  }
  
  return (
    <div className='content__div'>
      {activities.map((activity, index) => (
        <div className="content__div__li" key={index}>
        <li id = {index} className={`content__li ${activity.active ? 'strike' : ''}`} onClick={handleClick}>
          {activity.text}
        </li>
          <button className='content__li__btn' onClick={()=> removeItem(activity.id)}><img className='bin' src={BIN} alt="bin" /></button>
        </div>
      ))}
    </div>
    )
}
export default Content