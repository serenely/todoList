import { useState } from 'react';
import './App.css';

import AddToList from './components/AddToList/AddToList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';


const HEADER_TEXT = 'Todo List'
const ACTIVITIES = [
  { id: 1, text: 'Make a video in which you need to open your mouth to music', active: false },
  { id: 2, text: 'Take a bag and go to the gym', active: true },
  { id: 3, text: 'Do some exercises at home', active: false },
]

function App() {
  const [activities, setActivities] = useState(ACTIVITIES);

  const addActivity = newActivity => {
    setActivities([...activities, newActivity])
  }
  const removeItem = id => {
    setActivities(activities.filter(activity => activity.id !== id))
  }


  return (
    <div className='background'>
      <div className="App">
        <Header headerText={HEADER_TEXT} />
        <ul className='app_ul'>
          <AddToList addActivity={addActivity} activities={activities} />
          <Content activities={activities} setActivities={setActivities} removeItem={removeItem} />
        </ul>
      </div>
    </div>

  );
}

export default App;
